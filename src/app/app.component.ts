import { CalculatorService } from './services/calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tdd';
  number1: number = null;
  result: number;

  constructor(private _calculatorService: CalculatorService) { }

  sumar(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.result = this._calculatorService.sumar(n1, n2)
  }

  restar(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.result = this._calculatorService.restar(n1, n2)
  }

  multiplicar(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.result = this._calculatorService.multiplicar(n1, n2)
  }

  dividir(numero1: string, numero2: string): void {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.result = this._calculatorService.dividir(n1, n2)
  }

  setNumber(numero: string): void {
    const n = parseFloat(numero);
    if (this.number1 == null) {
      this.number1 = n;
    } else {
      this.number1 = parseFloat(String(this.number1) + numero);
      this.result = this.number1;
    }
    // this.number1 = n;
    console.log(this.result);
    
  }
  show(value: any) {
    console.log(value);
    
  }

}
