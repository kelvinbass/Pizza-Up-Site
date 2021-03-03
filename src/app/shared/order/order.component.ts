import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      deliveryInformation: this.formBuilder.group ({
        street: ['', Validators.required],
        houseNumber: ['', Validators.required],
        distric: ['',Validators.required],
        complement: ['', Validators.required],
        referencePoint: ['', Validators.required]
      }), 
    });
  }

  
  exibeErro(nameControl: string) {
    if (!this.orderForm!.get(nameControl)) {
      return false;
    }
    return this.orderForm.get(nameControl).invalid && this.orderForm.get(nameControl).touched;
  }
  
  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
        
    })
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      this.validateAllFormFields(this.orderForm);
      return alert('Pedido efetuado com sucesso! Em até 50 minutos seu pedido será entregue, agradeçemos a preferência =D'),
      this.router.navigate(['home']);
    }
  }
}