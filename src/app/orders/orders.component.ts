import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../app.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  restaurantId: number = 0;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.get(this.restaurantId).subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  delete(): void {
    this.ordersService.delete(this.restaurantId).subscribe((order) => {
      console.log(order);
      let index = this.orders.findIndex((element) => element.id == order.id);
      this.orders.splice(index, 1);
    });
  }
}
