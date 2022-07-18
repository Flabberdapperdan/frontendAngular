import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddMealComponent } from './add-meal/add-meal.component';
import { ComponentsModule } from '../components/components.module';
import { MealsComponent } from './meals.component';

const routes: Routes = [{ path: 'meals/:id', component: MealsComponent }];

@NgModule({
  declarations: [AddMealComponent, MealsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MealsModule {}
