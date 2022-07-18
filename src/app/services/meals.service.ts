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
  private restaurantId: number;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  setRestaurantId(inputId: number): void {
    this.restaurantId = inputId;
    this.subject.next(this.restaurantId);
    alert('this is the id in the service: ' + this.restaurantId);
  }
  onSetRestaurantId(): Observable<any> {
    return this.subject.asObservable();
  }

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
