import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { MealsService } from '../services/meals.service';
import { Meal } from 'src/app/Models/Meal';
import { connect, Subscription } from 'rxjs';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  meals: Meal[] = [];
  subscription: Subscription;
  showAddMeal: boolean = false;

  constructor(
    private mealsService: MealsService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
  }

  ngOnInit(): void {
    console.log('i am initializing');
    this.mealsService.getMeals().subscribe((meals) => {
      console.log(meals);
      this.meals = meals;
    });
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleAddMeal() {
    this.uiService.toggleAddMeal();
  }

  addMeal(meal: Meal) {
    this.mealsService.addMeal(meal).subscribe((meal) => this.meals.push(meal));
  }
}
