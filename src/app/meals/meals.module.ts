import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddMealComponent } from './add-meal/add-meal.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { ComponentsModule } from '../components/components.module';
import { MealsComponent } from './meals.component';

@NgModule({
  declarations: [AddMealComponent, MealItemComponent, MealsComponent],
  imports: [CommonModule, ComponentsModule, FormsModule],
})
export class MealsModule {}
