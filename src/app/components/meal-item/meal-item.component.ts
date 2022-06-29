import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/Meal';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css'],
})
export class MealItemComponent implements OnInit {
  @Input() meal: Meal | undefined;

  constructor() {}

  ngOnInit(): void {}
}
