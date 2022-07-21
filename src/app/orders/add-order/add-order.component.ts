import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/Models/Meal';
import { Order } from 'src/app/Models/Order';
import { Restaurant } from 'src/app/Models/Restaurant';
import { MealsService } from 'src/app/services/meals.service';
import { OrdersService } from 'src/app/services/orders.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  comment: string;
  order: Order;

  restaurantId: number;
  restaurant: Restaurant;
  mealId: number;
  meal: Meal;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['restaurantId'];
    this.mealId = this.activatedRoute.snapshot.params['mealId'];
  }

  onSubmit(): void {
    if (!this.comment) {
      alert('Voeg een opmerking toe');
    } else {
      this.ordersService
        .post(this.comment, this.mealId, this.restaurantId)
        .subscribe(() => {
          alert('bestelling is gemaakt');
          this.router.navigateByUrl(`meals/${this.restaurantId}`);
        });
    }
  }
}
