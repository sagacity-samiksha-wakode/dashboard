import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { MaterialModule } from '../material/material.module';
import { MoreInfoLinkDataComponent } from './more-info-link-data/more-info-link-data.component';
import { NgModule } from '@angular/core';
import { PerformaceCard1Component } from './performace-card1/performace-card1.component';
import { PerformanceCard2Component } from './performance-card2/performance-card2.component';
import { ProgressBarA1Component } from './progress-bar-a1/progress-bar-a1.component';
import {ProgressBarColor} from './progress-bar-a1/progress-a1-bar-color';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component,
    ProgressBarComponent,
    ProgressBarA1Component,
    ProgressBarColor,
    BarChartComponent,
    RadioButtonComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports:[
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component,
    ProgressBarComponent,
    ProgressBarA1Component,
    BarChartComponent

  ]
})
export class WidgetAppModule { }
