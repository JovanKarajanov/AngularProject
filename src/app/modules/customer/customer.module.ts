import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentDashboardComponent } from './components/component-dashboard/component-dashboard.component';


@NgModule({
  declarations: [
    ComponentDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
