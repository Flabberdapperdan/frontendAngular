import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Models/Restaurant';
import { CustomerService } from 'src/app/services/customer.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Order } from '../../Models/Order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../../app.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  id: number;
  name: string;
  isCustomer: boolean;
  orderType: string;

  constructor(
    private ordersService: OrdersService,
    private restaurantsService: RestaurantsService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.orderType = params['type'])
    );

    if (this.orderType === 'restaurant') {
      this.getRestaurant();
      this.getOrdersByRestaurant();
    } else if (this.orderType === 'customer') {
      this.getCustomer();
    }
  }

  //API CALLS\\
  getRestaurant(): void {
    this.restaurantsService.getAll().subscribe((restaurants) => {
      let index = restaurants.findIndex((element) => element.id == this.id);
      this.name = restaurants[index].naam;
    });
  }
  getCustomer(): void {
    this.customerService.get().subscribe((orders) => {
      let index = orders.findIndex((element) => element.id == this.id);
      this.name = orders[index].naam;
    });
  }

  getOrdersByRestaurant(): void {
    this.ordersService.getByRestaurant(this.id).subscribe((orders) => {
      this.orders = orders;
    });
  }
  getOrdersByCustomer(): void {
    this.ordersService.getByRestaurant(this.id).subscribe((orders) => {
      this.orders = orders;
    });
  }

  deleteOrder(order: Order): void {
    this.ordersService.delete(order.id).subscribe(() => {
      let index = this.orders.findIndex((element) => element.id == order.id);
      this.orders.splice(index, 1);
    });
  }
}
