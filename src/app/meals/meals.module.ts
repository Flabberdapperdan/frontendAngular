import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ComponentenModule } from '../componenten/componenten.module';
import { FormsModule } from '@angular/forms';
import { AddMealComponent } from './add-meal/add-meal.component';
import { MealItemComponent } from './meal-item/meal-item.component';

@NgModule({
  declarations: [AddMealComponent, MealItemComponent],
  imports: [CommonModule, ComponentenModule, FormsModule],
})
export class mealsModule {}
