import { 
    Injectable 
 } from '@angular/core';  
 
 @Injectable()
 export class appService {  
    getApp(): string { 
       return "I am a service"; 
    } 
 } 