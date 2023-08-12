import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'speakers',
    loadChildren: () => import('./modules/speakers-page/speakers-page.module').then(m => m.SpeakersPageModule)
  },
  {
    path: '**',
    redirectTo: 'speakers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
