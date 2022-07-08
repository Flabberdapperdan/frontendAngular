import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ComponentenModule } from './componenten/componenten.module';
import { mealsModule } from './meals/meals.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.mealsModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    QrCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
    RestaurantModule,
    mealsModule,
    ComponentenModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
