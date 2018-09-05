import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
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

  it('Se quiere que 5 más 3 se igual a 8 usando la función sumar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '5';
    const number2 = '3';
    const result = 8;

    const spySumar = spyOn(component, 'sumar').and.callThrough();
    component.sumar(number1, number2);
    expect(spySumar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 menos 3 se igual a 2 usando la función restar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '5';
    const number2 = '3';
    const result = 2;

    const spyRestar = spyOn(component, 'restar').and.callThrough();
    component.restar(number1, number2);
    expect(spyRestar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 5 por 3 se igual a 15 usando la función multiplicar', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '5';
    const number2 = '3';
    const result = 15;

    const spyMultiplicar = spyOn(component, 'multiplicar').and.callThrough();
    component.multiplicar(number1, number2);
    expect(spyMultiplicar).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere que 6 entre 3 se igual a 2 usando la función dividir', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '6';
    const number2 = '3';
    const result = 2;

    const spyDividir = spyOn(component, 'dividir').and.callThrough();
    component.dividir(number1, number2);
    expect(spyDividir).toHaveBeenCalled();
    expect(component.result).toEqual(result);
  });

  it('Se quiere ingresar el primer número', () => {
    // Obtener instacia del componenente
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    const number1 = '6';

    const spySetNumer = spyOn(component, 'setNumber').and.callThrough();
    component.setNumber(number1);
    expect(spySetNumer).toHaveBeenCalled();
    expect(component.number1).toEqual(parseFloat(number1));
  });

});
