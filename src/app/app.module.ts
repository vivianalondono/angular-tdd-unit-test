import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DotPipe } from './pipes/dot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DotPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
