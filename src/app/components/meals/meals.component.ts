import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { Meal } from 'src/app/Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    console.log('i am initializing');
    this.mealsService.getMeals().subscribe((meals) => {
      console.log(meals);
      this.meals = meals;
    });
  }
}

//   this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
