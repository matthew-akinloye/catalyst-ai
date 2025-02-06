import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewPrepRoutingModule } from './interview-prep-routing.module';
import { InterviewSimulatorComponent } from './interview-simulator/interview-simulator.component';
import { FeedbackAnalysisComponent } from './feedback-analysis/feedback-analysis.component';


@NgModule({
  declarations: [
    InterviewSimulatorComponent,
    FeedbackAnalysisComponent
  ],
  imports: [
    CommonModule,
    InterviewPrepRoutingModule
  ]
})
export class InterviewPrepModule { }
