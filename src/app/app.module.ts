import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealItemComponent } from './components/meals/meal-item/meal-item.component';
import { AddMealComponent } from './components/meals/add-meal/add-meal.component';

const appRoutes: Routes = [{}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    MealsComponent,
    MealItemComponent,
    AddMealComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
