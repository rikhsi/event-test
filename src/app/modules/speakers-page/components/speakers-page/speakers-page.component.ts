import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from 'src/app/models/api/speaker-card';
import { Filter } from 'src/app/models/components/filters';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'event-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.sass'],
})
export class SpeakersPageComponent implements OnInit {
  public $speakersList!: Observable<Speaker[]>;
  public searchedValue!: string;
  public filteredValue!: Filter;
  public isFav!: boolean;

  constructor(private speakersService: SpeakersService) {}

  ngOnInit(): void {
    this.$speakersList = this.speakersService.$speakersList;
  }

  public onLoadMore(): void {
    this.speakersService.loadMoreSpeakers();
  }
}
