import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../Models/Order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // API CALLS \\
  get(id: number) {
    return this.http.get<Order[]>(
      environment.apiUrl + '/overzichtbestellingen/restaurant/' + id
    );
  }

  post(comment: string, mealId: number, customerId: number) {
    let body = {
      maaltijdId: mealId,
      klantId: customerId,
      opmerking: comment,
    };
    return this.http.post<Order>(
      environment.apiUrl + `/bestellinginvoeren`,
      body,
      httpOptions
    );
  }

  delete(id: number) {
    return this.http.delete<Order>(
      environment.apiUrl + '/verwijderbestelling/' + id
    );
  }
}
