import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  listPizzas = [{
    id: 1,
    name: 'Dama da noite I',
    priceSmall: 29.90,
    priceMedium: 39.90,
    priceBig: 49.90,
  }, {
    id: 2,
    name: 'Lombinho',
    priceSmall: 29.90,
    priceMedium: 39.90,
    priceBig: 49.90, 
  },  {
    id: 3,
    name: 'Pepperoni',
    priceSmall: 29.90,
    priceMedium: 39.90,
    priceBig: 49.90,
  },  {
    id: 4,
    name: 'Carne de sol da nata',
    priceSmall: 29.90,
    priceMedium: 39.90,
    priceBig: 49.90,
  },  {
    id: 5,
    name: 'Quatro queijos',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  },  {
    id: 6,
    name: 'Portuguesa',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  },   {
    id: 7,
    name: 'Frango com catupiry',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 8,
    name: 'Frango com cream cheese',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 9,
    name: 'Frango especial',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90, 
  },   {
    id: 10,
    name: 'Sertaneja',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 11,
    name: 'Calabresa especial',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 12,
    name: 'Marguerita',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  },   {
    id: 13,
    name: 'Dama da noite II',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 14,
    name: 'Charge',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  },   {
    id: 15,
    name: 'Chocolate com morango',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 16,
    name: 'chocolate com M&Ms',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 17,
    name: 'Chocolate especial',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90, 
  },   {
    id: 18,
    name: 'Abacaxi',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  },   {
    id: 19,
    name: 'Banana',
    priceSmall: 24.90,
    priceMedium: 29.90,
    priceBig: 39.90,
  },   {
    id: 20,
    name: 'Prestígio',
    priceSmall: 19.90,
    priceMedium: 24.90,
    priceBig: 29.90,
  }, ]


  orderForm: FormGroup;

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
      pizzaInformation: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });
  }
  
  showDisplay = false;



  chosedType(option) {
    this.showDisplay = option === 'option1' ? false : true;
  }
  



  get pizzaInformation() { 
    return this.orderForm.get('pizzaInformation') as FormArray;

}

  addPizza() {
    this.pizzaInformation.push(this.formBuilder.control('new FormGroup'));
  }

  removePizza(index){
    this.pizzaInformation.removeAt(index);
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