import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';


@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumePreviewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilderModule { }
