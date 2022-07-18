import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [{ path: 'orders/:id', component: OrdersComponent }];

@NgModule({
  declarations: [OrdersComponent, AddOrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
