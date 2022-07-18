import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../Models/Meal';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private http: HttpClient) {}

  // API CALLS \\
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(environment.apiUrl + '/overzichtmaaltijden');
  }
  getMealsByRestaurant(id: number): Observable<Meal[]> {
    return this.http.get<Meal[]>(
      environment.apiUrl + '/overzichtmaaltijden/restaurant/' + id
    );
  }
  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(
      environment.apiUrl + '/maaltijdinvoeren',
      meal,
      httpOptions
    );
  }
  deleteMeal(meal: Meal): Observable<Meal> {
    return this.http.delete<Meal>(
      environment.apiUrl + '/verwijdermaaltijd/' + meal.id
    );
  }
}
