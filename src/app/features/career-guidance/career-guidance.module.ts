import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerGuidanceRoutingModule } from './career-guidance-routing.module';
import { CareerPathsComponent } from './career-paths/career-paths.component';
import { MarketInsightsComponent } from './market-insights/market-insights.component';


@NgModule({
  declarations: [
    CareerPathsComponent,
    MarketInsightsComponent
  ],
  imports: [
    CommonModule,
    CareerGuidanceRoutingModule
  ]
})
export class CareerGuidanceModule { }
