import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryTableComponent } from './country-table/country-table.component';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'countryprofile/:country', component: LayoutComponent },
    // { path: 'login', component: LoginComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }