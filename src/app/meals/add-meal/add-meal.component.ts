import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/Models/Meal';
import { Restaurant } from 'src/app/Models/Restaurant';
import { UiService } from '../../services/ui.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css'],
})
export class AddMealComponent implements OnInit {
  @Output() onAddMeal: EventEmitter<Meal> = new EventEmitter();
  name: string;
  description: string;
  calories: number;
  price: number;
  restaurantId: number;

  restaurants: Restaurant[] = [];

  subscription: Subscription;
  showAddMeal: boolean = false;

  constructor(
    private uiService: UiService,
    private restaurantsService: RestaurantsService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
  }

  ngOnInit(): void {
    this.restaurantsService.getAll().subscribe((restaurants) => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  onSubmit() {
    alert(this.restaurantId);
    if (!this.name) {
      alert('Voeg een naam van het gerecht toe.');
      return;
    } else if (!this.restaurantId) {
      alert('Voeg een restaurant van het gerecht toe.');
      return;
    }

    const newMeal: Meal = {
      naam: this.name,
      beschrijving: this.description,
      calorieen: this.calories,
      prijs: this.price,
      restaurantId: this.restaurantId,
    };

    this.onAddMeal.emit(newMeal);

    console.log(newMeal);
    this.name = '';
    this.description = '';
    this.calories;
    this.price = 0;
  }
}
