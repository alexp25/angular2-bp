import { Component } from '@angular/core';
import { Product } from './products';

@Component ({
   selector: 'product-form',
   templateUrl: './product-form.component.html'
})

export class ProductFormComponent {
   model = new Product(1,'ProductA');

   clickMessage = 'click me';
   counter = 0;
   onClickMe() {
        this.counter += 1;
       this.clickMessage = 'I was clicked ' + this.counter.toString() + ' times. click me!';
       console.log("it clicked me!");
   }

}