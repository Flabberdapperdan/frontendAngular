import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // API CALLES \\
  get(id: number) {
    return this.http.get<Order[]>(
      environment.apiUrl + '/overzichtbestellingen/restaurant/' + id
    );
  }

  delete(id: number) {
    return this.http.delete<Order>(
      environment.apiUrl + '/verwijderbestelling/' + id
    );
  }
}
