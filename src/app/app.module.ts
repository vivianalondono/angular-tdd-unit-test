import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DotPipe } from './pipes/dot.pipe';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { OtherPageComponent } from './other-page/other-page.component';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DotPipe,
    OnlyNumberDirective,
    OtherPageComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
