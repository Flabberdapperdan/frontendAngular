import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../Meal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private getUrl =
    'https://jc2206javabackend.azurewebsites.net/overzichtmaaltijden';
  private postUrl =
    'https://jc2206javabackend.azurewebsites.net/maaltijdinvoeren';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.getUrl);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.postUrl, meal, httpOptions);
  }
}
