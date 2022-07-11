import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantOverzichtPaginaComponent } from './restaurant-overzicht-pagina/restaurant-overzicht-pagina.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantOverzichtPaginaComponent },
];

@NgModule({
  declarations: [RestaurantOverzichtPaginaComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RestaurantModule {}
