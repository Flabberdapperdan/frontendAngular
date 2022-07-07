import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantOverzichtPaginaComponent } from './restaurant-overzicht-pagina/restaurant-overzicht-pagina.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentenModule } from '../componenten/componenten.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantOverzichtPaginaComponent },
]

@NgModule({
  declarations: [
    RestaurantOverzichtPaginaComponent
  ],
  imports: [
    CommonModule,
    ComponentenModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
