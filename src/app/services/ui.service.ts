import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddMeal: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddMeal(): void {
    this.showAddMeal = !this.showAddMeal;
    this.subject.next(this.showAddMeal);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
