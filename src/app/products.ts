export interface IProduct {
    ProductID: number;
    ProductName: string;
 }


 export class Product { 
    constructor ( 
       public productid: number, 
       public productname: string 
    ) {  } 
 }