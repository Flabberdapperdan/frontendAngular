import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Models/Restaurant';
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
  restaurantId: number;
  restaurant: Restaurant;

  constructor(
    private ordersService: OrdersService,
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['restaurantId'];
    this.getRestaurant();
    this.getOrders();
  }

  //API CALLS\\
  getRestaurant(): void {
    this.restaurantsService.getAll().subscribe((restaurants) => {
      let index = restaurants.findIndex(
        (element) => element.id == this.restaurantId
      );
      this.restaurant = restaurants[index];
    });
  }

  getOrders(): void {
    this.ordersService.get(this.restaurantId).subscribe((orders) => {
      console.log(orders);
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
