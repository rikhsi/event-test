import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';

const routes: Routes = [
  {
    path: '', component: SpeakersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersPageRoutingModule { }
