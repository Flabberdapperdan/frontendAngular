import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../Models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../app.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  restaurantId: number;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['id'];
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.get(this.restaurantId).subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  delete(order: Order): void {
    this.ordersService.delete(order.id).subscribe(() => {
      let index = this.orders.findIndex((element) => element.id == order.id);
      this.orders.splice(index, 1);
    });
  }
}
