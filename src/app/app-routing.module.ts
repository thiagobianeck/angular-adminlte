import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboardv1Component } from './pages/dashboardv1/dashboardv1.component';


const routes: Routes = [
  { path: 'dashboardv1', component: Dashboardv1Component },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboardv1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
