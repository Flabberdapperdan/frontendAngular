import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/Models/Restaurant';
import { ModalService } from 'src/app/services/modal.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-overzicht-pagina',
  templateUrl: './restaurant-overzicht-pagina.component.html',
  styleUrls: ['./restaurant-overzicht-pagina.component.css']
})
export class RestaurantOverzichtPaginaComponent implements OnInit {

  naam: string;
  adres: string;
  cuisine: string;

  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.searchRestaurants();
  }

  searchRestaurants() {
    this.restaurantsService.getAll().subscribe( restaurants => {
      this.restaurants = restaurants;
    })
  }

  voegToeWeergeven() {
    this.modalService.show('addrestaurant');
  }

  close() {
    this.modalService.hide('addrestaurant');
  }

  delete(restaurant: Restaurant) {
    this.restaurantsService.delete(restaurant.id).subscribe( response => {
      this.searchRestaurants();
    });
  }

  save() {
    var restaurant = new Restaurant();
    restaurant.naam = this.naam;
    restaurant.adres = this.adres;
    restaurant.cuisine = this.cuisine;
    restaurant.geopend = true;
    restaurant.bezorger = 1;

    this.restaurantsService.add(restaurant).subscribe( response => {
      this.naam = '';
      this.adres = '';
      this.cuisine = '';

      this.close();
      this.searchRestaurants();
    });
  }

}
