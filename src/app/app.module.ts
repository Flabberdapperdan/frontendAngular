import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { RestaurantModule } from './restaurant/restaurant.module';
import { ComponentsModule } from './components/components.module';
import { MealsModule } from './meals/meals.module';

import { AppComponent } from './app.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NavbarModule } from './navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
    RestaurantModule,
    MealsModule,
    NavbarModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
