import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'customers', component: CustomerComponent }];

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CustomerModule {}
