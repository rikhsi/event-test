import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CardDirective } from './directives/card.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { TitlePipe } from './pipes/title.pipe';
import { PopularPipe } from './pipes/popular.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { FavPipe } from './pipes/fav.pipe';


@NgModule({
  declarations: [
    SpeakerCardComponent,
    BreadcrumpComponent,
    SearchComponent,
    CardDirective,
    ScrollDirective,
    TitlePipe,
    PopularPipe,
    DropdownDirective,
    FavPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SpeakerCardComponent,
    BreadcrumpComponent,
    SearchComponent,
    CardDirective,
    ScrollDirective,
    TitlePipe,
    PopularPipe,
    DropdownDirective,
    FavPipe

  ]
})
export class SharedModule { }
