import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../Models/Meal';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../Models/Restaurant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(
      environment.apiUrl + '/overzichtrestaurants'
    );
  }

  add(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(
      environment.apiUrl + '/restaurantinvoeren',
      restaurant,
      httpOptions
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(
      environment.apiUrl + '/verwijderrestaurant/' + id
    );
  }
}
