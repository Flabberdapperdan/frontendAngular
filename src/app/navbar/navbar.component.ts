import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToRestaurants() {
    this.router.navigateByUrl('/restaurants');
  }

  goToMeals() {
    this.router.navigateByUrl('/meals');
  }
}
