import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersPageRoutingModule } from './speakers-page-routing.module';
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';
import { AboutComponent } from './components/about/about.component';
import { BarComponent } from './components/bar/bar.component';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SpeakersPageComponent,
    AboutComponent,
    BarComponent,
    SpeakersListComponent
  ],
  imports: [
    CommonModule,
    SpeakersPageRoutingModule,
    SharedModule
  ]
})
export class SpeakersPageModule { }
