import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { MealsService } from '../services/meals.service';
import { Meal } from 'src/app/Models/Meal';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  meals: Meal[] = [];
  uiSubscription: Subscription;
  mealsSubscription: Subscription;
  showAddMeal: boolean = false;

  restaurantId: number;
  restaurantName: string;

  constructor(
    private mealsService: MealsService,
    private restaurantsService: RestaurantsService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['id'];
    this.getRestaurantName();
    this.uiSubscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
    this.getMeals();
  }

  toggleAddMeal() {
    this.uiService.toggleAddMeal();
  }

  addToOrder(mealId: number) {
    this.router.navigateByUrl(`/orders/${this.restaurantId}/${mealId}`);
  }

  // API-calls \\
  getRestaurantName = () => {
    this.restaurantsService.getAll().subscribe((restaurants) => {
      let index = restaurants.findIndex(
        (element) => element.id == this.restaurantId
      );
      if (index > -1) {
        this.restaurantName = restaurants[index].naam;
      } else {
        alert('invalid id for restaurant');
      }
    });
  };
  getMeals(): void {
    this.mealsService
      .getMealsByRestaurant(this.restaurantId)
      .subscribe((meals) => {
        this.meals = meals;
      });
  }
  addMeal(meal: Meal) {
    this.mealsService.addMeal(meal).subscribe((res) => {
      this.getMeals();
      this.toggleAddMeal();
    });
  }
  delete(meal: Meal) {
    this.mealsService.deleteMeal(meal).subscribe(() => {
      this.getMeals();
    });
  }
}
