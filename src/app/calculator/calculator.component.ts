import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  operation: string;
  number1: number = null;
  number2: number = null;
  result: number;

  constructor(
    private _calculatorService: CalculatorService,
    private _router: Router
  ) { }

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

  show(value: any) {
    console.log(value);
  }

  updateRsult(event: any) {
    console.log('event', event);
  }

  navigateToOtherPage(param: any) {
    if (param) {
      this._router.navigate(['otherPage', param]);
    } else {
      this._router.navigate(['otherPage']);
    }
  }

}
