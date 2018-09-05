import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  result: number;
  validation: string;

  constructor() { }

  sumar(numero1: number, numero2: number): number {
    this.result = numero1 + numero2;;
    return this.result;
  }

  restar(numero1: number, numero2: number): number {
    this.result = numero1 - numero2;;
    return this.result;
  }

  multiplicar(numero1: number, numero2: number): number {
    this.result = numero1 * numero2;;
    return this.result;
  }
  
  dividir(numero1: number, numero2: number): any {
    if (numero2 == 0) {
      return this.validation = 'Operación invalida';
    } else {
      this.result = numero1 / numero2;    
      return this.result;      
    }
  }

}
