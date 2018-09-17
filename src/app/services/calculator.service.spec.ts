import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {

  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
    // Se obtiene la instancia del servicio
    service = TestBed.get(CalculatorService);
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('Se quiere que 5 más 3 se igual a 8 usando la función sumar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 8;
    
    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spySumar = spyOn(service, 'sumar').and.callThrough();
    service.sumar(number1, number2);
    
    // Assert
    expect(spySumar).toHaveBeenCalled();
    expect(service.result).toEqual(result);
  });

  it('Se quiere que 5 menos 3 se igual a 2 usando la función restar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 2;

    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spyRestar = spyOn(service, 'restar').and.callThrough();
    service.restar(number1, number2);
    
    // Assert
    expect(spyRestar).toHaveBeenCalled();
    expect(service.result).toEqual(result);
  });

  it('Se quiere que 3 menos 5 se igual a -2 usando la función restar', () => {
    // Arrange
    const number1 = 3;
    const number2 = 5;
    const result = -2;

    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spyRestar = spyOn(service, 'restar').and.callThrough();
    service.restar(number1, number2);
    
    // Assert
    expect(spyRestar).toHaveBeenCalled();
    expect(service.result).toEqual(result);
  });

  it('Se quiere que 5 por 3 se igual a 15 usando la función multiplicar', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;
    const result = 15;

    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spyMultiplicar = spyOn(service, 'multiplicar').and.callThrough();
    service.multiplicar(number1, number2);
    
    // Assert
    expect(spyMultiplicar).toHaveBeenCalled();
    expect(service.result).toEqual(result);
  });

  it('Se quiere que 6 entre 3 se igual a 2 usando la función dividir', () => {
    // Arrange
    const number1 = 6;
    const number2 = 3;
    const result = 2;

    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spyDividir = spyOn(service, 'dividir').and.callThrough();
    service.dividir(number1, number2);
    
    // Assert
    expect(spyDividir).toHaveBeenCalled();
    expect(service.result).toEqual(result);
  });

  it('Se quiere que al dividir entre cero retorne "Operación invalida"', () => {
    // Arrange
    const number1 = 6;
    const number2 = 0;
    const result = 'Operación invalida';

    // Act
    // Espia que esta pendiente del llamdo de la funcion
    const spyDividir = spyOn(service, 'dividir').and.callThrough();
    service.dividir(number1, number2);
    
    // Assert
    expect(spyDividir).toHaveBeenCalled();
    expect(service.validation).toEqual(result);
  });
});
