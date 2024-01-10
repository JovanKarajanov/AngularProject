import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDashboardComponent } from './components/component-dashboard/component-dashboard.component';
// ComponentDashboardComponent == CustomerDashboardComponent
const routes: Routes = [
  { path:"dashboard", component:ComponentDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
