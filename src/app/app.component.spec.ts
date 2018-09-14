import { CalculatorComponent } from './calculator/calculator.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { FormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture, getTestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DotPipe } from './pipes/dot.pipe';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from './app.routes';
import { Location, APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let inputEl: DebugElement; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalculatorComponent,
        OtherPageComponent,
        DotPipe,
        OnlyNumberDirective
      ],
      imports: [
        RouterModule.forRoot(ROUTES),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF , useValue: '/'}
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
});

