import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizzas } from './order-interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  @Output() valorChange = new EventEmitter();

  pizza: Pizzas;

  orderForm: FormGroup;

  // pizzaSize = ['Pequena', 'Média', 'Grande'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({

      clientInformation: this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
      }),

      deliveryInformation: this.formBuilder.group({
        street: ['', Validators.required],
        houseNumber: ['', Validators.required],
        district: ['', Validators.required],
        complement: [''],
        referencePoint: [''],
      }),
      // pizzaInformation: this.formBuilder.group({
      //   flavors: ['', Validators.required],
      //   pizzaSize: ['', Validators.required],
      //   pizzaType: ['', Validators.required],
      //   pizzaObservartions: ['']
      // }),

      // pizzaSize: this.builderPizzaSize(),
      pizzaInformation: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });
  }

  // builderPizzaSize(){

  //   const values = this.pizzaSize.map(v => new FormControl(false));

  //   return this.formBuilder.array(values);
  // }

  
  showDisplay = false;



  chosedSize(option) {
    console.log(option);
    this.showDisplay = option === 'option1' ? false : true;
  }
  


  get pizzaInformation() { 
    return this.orderForm.get('pizzaInformation') as FormArray;

}

  addNewPizza() {
    this.pizzaInformation.push(this.formBuilder.control(''));
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
      return alert('Infomações incompletas');
    }
    alert('Pedido efetuado com sucesso!');
    this.router.navigate(['cardapio']);
  }





}