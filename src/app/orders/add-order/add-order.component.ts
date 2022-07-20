import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/Order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  comment: string;
  order: Order;

  restaurantId: number;
  mealId: number;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['restaurantId'];
    this.mealId = this.activatedRoute.snapshot.params['mealId'];
  }

  onSubmit(): void {
    if (!this.comment) {
      alert('Voeg een opmerking toe');
    } else {
      alert('we are submitting with: ' + this.comment);
    }
  }
}
