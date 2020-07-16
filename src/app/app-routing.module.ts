import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details.component';
import { MarketplaceComponent } from './marketplace.component';
import { C1Component } from './c1.component';
import { C2Component } from './c2.component';
import { AppComponent } from'./app.component';

const routes: Routes = [
  { path: '', redirectTo: '/marketplace', pathMatch: 'full' },
  { path: 'detail/:id', component: CarDetailsComponent },
  { path: 'home', component: AppComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'c1', component: C1Component },
  { path: 'c2', component: C2Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }