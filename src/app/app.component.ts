import { CalculatorService } from './services/calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operation: string;
  title = 'angular-tdd';
  number1: number = null;
  number2: number = null;
  result: number;

  constructor(private _calculatorService: CalculatorService) { }

  setNumber(numero: string): void {
    const n = parseFloat(numero);
    if (this.number1 == null) {
      this.number1 = n;
      this.result = this.number1;
    } else if (this.number2 == null && this.operation == null) {
      this.number1 = parseFloat(String(this.number1) + numero);
      this.result = this.number1;
    } else if (this.number2 == null && this.operation != null) {
      this.number2 = n;
      this.result = this.number2;
    } else {
      this.number2 = parseFloat(String(this.number2) + numero);
      this.result = this.number2;
    }
  }

  sumar(): void {
    this.result = this._calculatorService.sumar(this.number1, this.number2);
    this.number1 = this.number2 = this.operation = null;
  }

  restar(): void {
    this.result = this._calculatorService.restar(this.number1, this.number2);
    this.number1 = this.number2 = this.operation = null;
  }

  multiplicar(): void {
    this.result = this._calculatorService.multiplicar(this.number1, this.number2);
    this.number1 = this.number2 = this.operation = null;
  }

  dividir(): void {
    this.result = this._calculatorService.dividir(this.number1, this.number2);
    this.number1 = this.number2 = this.operation = null;
  }


  clear() {
    this.number1 = null;
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  selectOperation(operation: string) {
    this.operation = operation;
  }

  ejecutar() {
    switch (this.operation) {
      case 'sumar':
        this.sumar();
        break;
      case 'restar':
        this.restar();
        break;
      case 'multiplicar':
        this.multiplicar();
        break;
      case 'dividir':
        this.dividir();
        break;

      default:
        null;
        break;
    }
  }

}
