import { AppComponent } from './../app.component';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { OnlyNumberDirective } from '../directive/only-number.directive';
import { By } from '@angular/platform-browser';
import { DotPipe } from '../pipes/dot.pipe';
import { OtherPageComponent } from '../other-page/other-page.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../app.routes';
import { Location } from '@angular/common';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let inputEl: DebugElement;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalculatorComponent,
        DotPipe,
        OnlyNumberDirective,
        OtherPageComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(ROUTES)
      ]
    }).compileComponents();

    // Obtener instacia del componenente
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se quiere que 5 más 3 sea igual a 8 ejecutando la función sumar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 8;
    const operation = 'sumar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();

    // Assert
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 menos 3 se igual a 2 usando la función restar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 2;
    const operation = 'restar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();

    // Assert
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 por 3 se igual a 15 usando la función multiplicar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 15;
    const operation = 'multiplicar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();

    // Assert
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 6 entre 3 se igual a 2 usando la función dividir', () => {
    // Arrange
    const number1 = 6;
    const number2 = 3;
    const result = 2;
    const operation = 'dividir'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();

    // Assert
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere ingresar la priumera cifra', () => {
    // Arrange
    const number1 = '6';

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(number1);

    // Assert
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));
  });

  it('Se quiere al ingresar un número este se añada a la primera cifra', () => {
    // Arrange
    const currentNumber = 908;
    const enteredNumber = '6';
    const result = 9086;

    component.number1 = currentNumber;
    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(enteredNumber);

    // Assert
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere limpiar la calculadora', () => {
    // Arrange
    const number1 = 5;
    const number2 = 8;
    const result = null;
    const operation = 'multiplicar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;
    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyClear = spyOn(component, 'clear').and.callThrough();
    component.clear();

    // Assert
    expect(spyClear).toHaveBeenCalled();
    expect(component.result).toBeNull();
    expect(component.number1).toBeNull();
    expect(component.number2).toBeNull();
  });

  it('Se quiere seleccionar una operación (sumar)', () => {
    // Arrange
    const number1 = '45';
    const operation = 'sumar';

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spySelectOperation = spyOn(component, 'selectOperation').and.callThrough();
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(number1);
    component.selectOperation(operation);

    // Assert
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));
    expect(spySelectOperation).toHaveBeenCalled();
    expect(component.operation).toEqual(operation);
  });

  it('Se quiere ingresar la segunda cifra', () => {
    // Arrange
    const number1 = '45';
    const operation = 'sumar';
    const number2 = '5';

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spySelectOperation = spyOn(component, 'selectOperation').and.callThrough();
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(number1);
    component.selectOperation(operation);
    component.setNumber(number2);

    // Assert
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));
    expect(spySelectOperation).toHaveBeenCalled();
    expect(component.operation).toEqual(operation);
    expect(spySetNumer).toHaveBeenCalledTimes(2);
    expect(component.number2).toEqual(parseFloat(number2));
  });

  it('Se quiere al ingresar un número este se añada a la segunda cifra', () => {
    // Arrange
    const number1 = 45;
    const operation = 'sumar';
    const number2 = 5;
    const enteredNumber = '5';
    const result = 55;

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(enteredNumber);

    // Assert
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number2).toEqual(result);
  });

  it('Se quiere obtener el resultado de una operación (sumar)', () => {
    // Arrange
    const number1 = 45;
    const operation = 'sumar';
    const number2 = 5;
    const result = 50;

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    // Act
    // Espia que esta pendiente de los llamados de la funcion
    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();

    // Assert
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
    expect(component.number1).toBeNull();
    expect(component.number2).toBeNull();

  });

  describe('Directive: onlynumber', () => {

    it('Debería permitir ingresar números', () => {
      // Arrange
      const element: DebugElement = fixture.debugElement.query(By.css('#numbers'));
      const directiveInstance = element.injector.get(OnlyNumberDirective);

      // Act
      element.nativeElement.value = '123'
      // Se dispara el evento
      element.triggerEventHandler("keydown", {
        "key": '2'
      });

      // Assert
      expect(directiveInstance.output).toBe('1232');
    });

    it('Debería no permitir ingresar letras', () => {
      // Arrange
      const element: DebugElement = fixture.debugElement.query(By.css('#numbers'));
      const directiveInstance = element.injector.get(OnlyNumberDirective);

      // Act
      element.nativeElement.value = '123'
      // Se dispara el evento
      element.triggerEventHandler("keydown", {
        "key": 'a'
      });

      // Assert
      expect(directiveInstance.output).toBe('123');
    });

  });

  describe('Probar Router', () => {

    it('Se quiere navegar a otherPage', () => {
      // Arrange
      // Obtener instacia del componenente
      const fixture = TestBed.createComponent(CalculatorComponent);
      const component = fixture.debugElement.componentInstance;
      const injector = getTestBed();
      location = injector.get(Location);
      const router = injector.get(Router);

      // Act
      // Espia que esta pendiente de los llamados de la funcion
      spyOn(component, 'navigateToOtherPage').and.callThrough();
      component.navigateToOtherPage();
      // Se espera a que el componente este estable (termine la navegación)
      fixture.whenStable().then(() => {
        // Assert
        expect(component.navigateToOtherPage).toHaveBeenCalled();
        expect(location.path()).toContain('otherPage');
      });
    });

    it('Se quiere navegar a otherPage con parametros', () => {
      // Arrange
      const injector = getTestBed();
      location = injector.get(Location);
      const router = injector.get(Router);
      const param = 'parametro';

      // Act
      // Espia que esta pendiente de los llamados de la funcion
      spyOn(component, 'navigateToOtherPage').and.callThrough();
      component.navigateToOtherPage(param);
      // Se espera a que el componente este estable (termine la navegación)
      fixture.whenStable().then(() => {
        // Assert
        expect(component.navigateToOtherPage).toHaveBeenCalledWith(param);
        expect(location.path()).toContain('otherPage/' + param);
      });
    });

  });

});
