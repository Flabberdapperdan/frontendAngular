import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { MealsService } from '../services/meals.service';
import { Meal } from 'src/app/Models/Meal';
import { connect, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  //noMeals: boolean = true;

  constructor(
    private mealsService: MealsService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['id'];
    this.uiSubscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
    this.getMeals();
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.uiSubscription.unsubscribe();
  }

  toggleAddMeal() {
    this.uiService.toggleAddMeal();
  }

  // API-calls \\
  getMeals(): void {
    this.mealsService
      .getMealsByRestaurant(this.restaurantId)
      .subscribe((meals) => {
        this.meals = meals;
      });
  }
  addMeal(meal: Meal) {
    this.mealsService.addMeal(meal).subscribe((meal) => this.meals.push(meal));
  }
  delete(meal: Meal) {
    this.mealsService.deleteMeal(meal).subscribe(() => {
      let index = this.meals.findIndex((element) => element.id == meal.id);
      this.meals.splice(index, 1);
    });
  }
}
