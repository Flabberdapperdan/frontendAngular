import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'orders/:restaurantId', component: OrdersComponent },
  { path: 'orders/:restaurantId/:mealId', component: AddOrderComponent },
];

@NgModule({
  declarations: [OrdersComponent, AddOrderComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
