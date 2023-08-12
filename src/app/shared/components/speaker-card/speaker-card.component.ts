import { Component, Input } from '@angular/core';
import { Speaker } from 'src/app/models/api/speaker-card';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'event-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.sass']
})
export class SpeakerCardComponent {
  @Input() speaker!: Speaker;
  @Input() isLoading!: boolean;

  public isAdded!: boolean;

  constructor(private speakersService: SpeakersService){}

  ngOnInit(): void {
    this.check();
  }

  public addToFav(): void {
    if(!this.isAdded)  {
      this.isAdded = true;
      this.speakersService.addFavorite(this.speaker);
    } else {
      this.removeFromFav();
    }

  }

  public removeFromFav(): void {
    this.isAdded = false;
    this.speakersService.removeFavorite(this.speaker);
  }

  private check(): void {
    if(this.speakersService.isFavorite(this.speaker)) this.isAdded = true;
    else this.isAdded = false;
  }
  
}
