import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/Models/Meal';
import { UiService } from '../../services/ui.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ActivatedRoute } from '@angular/router';

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
  @Input() restaurantName: string;

  subscription: Subscription;
  showAddMeal: boolean = false;

  constructor(
    private uiService: UiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddMeal = value));
  }

  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params['id'];
  }

  onSubmit() {
    if (!this.name) {
      alert('Voeg een naam van het gerecht toe.');
      return;
    } else if (!this.restaurantId) {
      alert('Voeg een restaurant van het gerecht toe.');
      return;
    }

    // const newMeal: Meal = {
    //   naam: this.name,
    //   beschrijving: this.description,
    //   calorieen: this.calories,
    //   prijs: this.price,
    //   restaurantId: this.restaurantId,
    // };

    console.log(this.restaurantName);

    let newMeal = new Meal();
    newMeal.naam = this.name;
    newMeal.beschrijving = this.description;
    newMeal.prijs = this.price;
    newMeal.restaurantId = this.restaurantId;

    console.log(newMeal);

    this.onAddMeal.emit(newMeal);

    this.name = '';
    this.description = '';
    this.calories;
    this.price = 0;
  }
}
