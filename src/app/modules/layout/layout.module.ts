import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './country-table/country-table.component';
import { LayoutRoutingModule } from './layout-routing.module'
import { MaterialModule } from 'src/app/material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { GlobalDataTableComponent } from './global-data-table/global-data-table.component';
import { ProfileCountryComponent } from './profile-country/profile-country.component';
import { LineChartComponent } from './line-chart/line-chart.component'


@NgModule({
  declarations: [CountryTableComponent, LayoutComponent, GlobalDataTableComponent, ProfileCountryComponent, LineChartComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
