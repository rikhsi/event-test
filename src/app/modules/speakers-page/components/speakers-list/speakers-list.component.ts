import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from 'src/app/models/api/speaker-card';
import { Filter } from 'src/app/models/components/filters';

@Component({
  selector: 'event-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.sass']
})
export class SpeakersListComponent {
   @Input() $speakersList!: Observable<Speaker[]>;
   @Input() searchedValue!: string;
   @Input() filteredValue!: Filter;
   @Input() isFav!: boolean;
   @Output() loadMore = new EventEmitter();

   public isFiltering = false;
  
   public onFilteringStart() {
     this.isFiltering = true;
   }

   public onFilteringDone() {
      this.isFiltering = false;
    }

   public onScrollEnd() {
      this.loadMore.emit();
   }
}
