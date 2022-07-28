import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Models/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css', '../app.component.css'],
})
export class CustomerComponent implements OnInit {
  costumers: Customer[];

  constructor(
    private costumerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.costumerService
      .get()
      .subscribe((costumers) => (this.costumers = costumers));
  }

  goToOrders(id: number) {
    this.router.navigateByUrl('/orders/' + id + '?type=customer');
  }
}
