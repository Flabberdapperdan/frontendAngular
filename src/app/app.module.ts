import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealItemComponent } from './components/meals/meal-item/meal-item.component';
import { AddMealComponent } from './components/meals/add-meal/add-meal.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ComponentenModule } from './componenten/componenten.module';

const routes: Routes = [
  { path: 'demo', component: MealsComponent },
  { path: 'demo2', component: AddMealComponent },
  { path: '', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    MealsComponent,
    MealItemComponent,
    AddMealComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
    RestaurantModule,
    ComponentenModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
