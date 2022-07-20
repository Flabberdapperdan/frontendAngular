import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/Models/Restaurant';
import { MealsService } from 'src/app/services/meals.service';
import { ModalService } from 'src/app/services/modal.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-overzicht-pagina',
  templateUrl: './restaurant-overzicht-pagina.component.html',
  styleUrls: [
    './restaurant-overzicht-pagina.component.css',
    '../../app.component.css',
  ],
})
export class RestaurantOverzichtPaginaComponent implements OnInit {
  naam: string;
  adres: string;
  cuisine: string;

  restaurants: Restaurant[] = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private modalService: ModalService,
    private mealsService: MealsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchRestaurants();
  }

  goToMeals(id: number): void {
    //this.mealsService.setRestaurantId(id);
    this.router.navigateByUrl('/meals/' + id);
  }
  goToOrders(id: number): void {
    //this.mealsService.setRestaurantId(id);
    this.router.navigateByUrl('/orders/' + id);
  }

  showAdd() {
    this.modalService.show('addrestaurant');
  }
  close() {
    this.modalService.hide('addrestaurant');
  }

  // API CALLS \\
  searchRestaurants(): void {
    this.restaurantsService
      .getAll()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }
  delete(restaurant: Restaurant): void {
    this.restaurantsService.delete(restaurant.id).subscribe((response) => {
      this.searchRestaurants();
    });
  }
  save(): void {
    var restaurant = new Restaurant();
    restaurant.naam = this.naam;
    restaurant.adres = this.adres;
    restaurant.cuisine = this.cuisine;
    restaurant.geopend = true;
    restaurant.bezorger = 1;

    this.restaurantsService.add(restaurant).subscribe((response) => {
      this.naam = '';
      this.adres = '';
      this.cuisine = '';

      this.close();
      this.searchRestaurants();
    });
  }
}
