import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/Models/Meal';
import { UiService } from '../../../services/ui.service';

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

  subscription: Subscription;
  showAddMeal: boolean = true;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Voeg een naam van het gerecht toe.');
      return;
    }

    const newMeal: Meal = {
      naam: this.name,
      beschrijving: this.description,
      calorieen: this.calories,
      prijs: this.price,
    };

    this.onAddMeal.emit(newMeal);

    console.log(newMeal);
    this.name = '';
    this.description = '';
    this.calories;
    this.price = 0;
  }
}
