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
  private apiUrl = 'http://localhost:8082/overzichtmaaltijden';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    let data = this.http.get<Meal[]>(this.apiUrl);
    console.log(data);

    return data;
  }
}
