import { FormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DotPipe } from './pipes/dot.pipe';
import { OnlyNumberDirective } from './directive/only-number.directive';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let inputEl: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DotPipe,
        OnlyNumberDirective
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => { 
    fixture = TestBed.createComponent(AppComponent); 
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-tdd'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-tdd');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-tdd!');
  }));

  it('Se quiere que 5 más 3 sea igual a 8 ejecutando la función sumar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 5;
    const number2 = 3;
    const result = 8;
    const operation = 'sumar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 menos 3 se igual a 2 usando la función restar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 5;
    const number2 = 3;
    const result = 2;
    const operation = 'restar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 por 3 se igual a 15 usando la función multiplicar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 5;
    const number2 = 3;
    const result = 15;
    const operation = 'multiplicar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 6 entre 3 se igual a 2 usando la función dividir', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 6;
    const number2 = 3;
    const result = 2;
    const operation = 'dividir'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();
    component.ejecutar();
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere ingresar la priumera cifra', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '6';

    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(number1);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));
  });

  it('Se quiere al ingresar un número este se añada a la primera cifra', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const currentNumber = 908;
    const enteredNumber = '6';
    const result = 9086;

    component.number1 = currentNumber;
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(enteredNumber);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere limpiar la calculadora', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 5;
    const number2 = 8;
    const result = null;
    const operation = 'multiplicar'

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;
    const spyClear = spyOn(component, 'clear').and.callThrough();
    component.clear();
    expect(spyClear).toHaveBeenCalled();
    expect(component.result).toBeNull();
    expect(component.number1).toBeNull();
    expect(component.number2).toBeNull();
  });

  it('Se quiere seleccionar una operación (sumar)', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;


    const number1 = '45';
    const operation = 'sumar';

    const spySelectOperation = spyOn(component, 'selectOperation').and.callThrough();
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    
    component.setNumber(number1);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));

    component.selectOperation(operation);
    expect(spySelectOperation).toHaveBeenCalled();
    expect(component.operation).toEqual(operation);
  });

  it('Se quiere ingresar la segunda cifra', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;


    const number1 = '45';
    const operation = 'sumar';
    const number2 = '5';

    const spySelectOperation = spyOn(component, 'selectOperation').and.callThrough();
    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    
    component.setNumber(number1);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));

    component.selectOperation(operation);
    expect(spySelectOperation).toHaveBeenCalled();
    expect(component.operation).toEqual(operation);

    component.setNumber(number2);
    expect(spySetNumer).toHaveBeenCalledTimes(2);
    expect(component.number2).toEqual(parseFloat(number2));
  });

  it('Se quiere al ingresar un número este se añada a la segunda cifra', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;


    const number1 = 45;
    const operation = 'sumar';
    const number2 = 5;
    const enteredNumber = '5';
    const result = 55;

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();

    component.setNumber(enteredNumber);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number2).toEqual(result);
  });

  it('Se quiere obtener el resultado de una operación (sumar)', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = 45;
    const operation = 'sumar';
    const number2 = 5;
    const result = 50;

    component.number1 = number1;
    component.number2 = number2;
    component.operation = operation;

    const spyEjecutar = spyOn(component, 'ejecutar').and.callThrough();

    component.ejecutar();
    expect(spyEjecutar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
    expect(component.number1).toBeNull();
    expect(component.number2).toBeNull();

  });

  describe('Directive: onlynumber', () => {

    it('Debería permitir ingresar números', () => {
      const element: DebugElement = fixture.debugElement.query(By.css('#numbers'));
      const directiveInstance = element.injector.get(OnlyNumberDirective);

      element.nativeElement.value = '123'
      element.triggerEventHandler("keydown",{
        "key": '2'
      });
      expect(directiveInstance.output).toBe('1232');
    });

    it('Debería no permitir ingresar letras', () => {

      const element: DebugElement = fixture.debugElement.query(By.css('#numbers'));
      const directiveInstance = element.injector.get(OnlyNumberDirective);

      element.nativeElement.value = '123'
      element.triggerEventHandler("keydown",{
        "key": 'a'
      });
      expect(directiveInstance.output).toBe('123');
    });
    
  });
  

});

