import { CalculatorComponent } from './calculator/calculator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { OtherPageComponent } from './other-page/other-page.component';

export const ROUTES: Routes = [
    { path: '', component: CalculatorComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'otherPage', component: OtherPageComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: false })]
})

export class AppRoutingModule { }