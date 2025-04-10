import { Injectable, signal } from '@angular/core';
import { permissionsModel } from './home/home.component';

type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type apiRespons<T> ={
  data?:T,
  // content?:T
  errorMessage:string,
  success:boolean,
  resultCode:string
}
type response1 = apiRespons<permissionsModel>

interface User {
  id: number;
  name: string;
}

const readonlyUser: response1 = {
  data: {
    id: '',
    perName: '',
    name: ''
  },
  errorMessage: '',
  success: false,
  resultCode: ''
};

// console.log(readonlyUser.name);

@Injectable()
export class MyService<T> {
  showName = signal('Nika');
  private data!:T;
  


 
  // addElemnt<T,k>(el:T,persone:k,key?: keyof k):[T,k | k[keyof k]]{
  //   if(key){
  //     return [el,persone[key]]
  //   } else {
  //     return [el,persone]
  //   }

  
 
  // }



  // getElement <K extends keyof T>(key:K):void{
  //   console.log(key);
    
  //    this.data[key]
  // }




  // setName(name: string): void {
  //   this.showName.set(name);
  //   setTimeout(() => {
  //     console.log(this.showName());
  //   }, 500);
  // }

  // test<T>(greeting:any):T{
  //   console.log(typeof(greeting))
  //   return greeting.surname
  // }
}
