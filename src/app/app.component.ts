import { CalculatorService } from './services/calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tdd';
  result: number;

  constructor(private _calculatorService: CalculatorService) { }

  sumar(numero1: string, numero2: string) {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    this.result = this._calculatorService.sumar(n1, n2)
  }

}
