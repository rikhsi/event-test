import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from 'src/app/models/components/filters';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'event-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent{
  @Output() shareSearchedValue = new EventEmitter<string>();
  @Output() shareFilterValue = new EventEmitter<Filter>();
  @Output() shareIsFav = new EventEmitter<boolean>();

  public isOpen: boolean = true;
  public isPopular: Filter = 0;
  public isFav: boolean = false;

  public onSearch(value: string): void {
    this.shareSearchedValue.emit(value);
  }
  
  public changeFilter(state: Filter): void {
    if (state !== this.isPopular) {
      this.isPopular = state;
      this.shareFilterValue.emit(state);
    }
  }

  public openFav(): void {
    this.shareIsFav.emit(this.isFav = !this.isFav);
  }
}
