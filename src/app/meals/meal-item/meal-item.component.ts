import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/Models/Meal';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css'],
})
export class MealItemComponent implements OnInit {
  @Input() meal: Meal;

  constructor() {}

  ngOnInit(): void {
    console.log(this.meal.naam);
  }
}
