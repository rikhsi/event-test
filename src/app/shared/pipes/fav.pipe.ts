import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/models/api/speaker-card';
import { SpeakersService } from 'src/app/services/speakers.service';

@Pipe({
  name: 'fav',
  pure: false
})
export class FavPipe implements PipeTransform {
  private favorites: Speaker[] = [];

  constructor(private speakersService: SpeakersService) {
    this.speakersService.favorites$.subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  transform(speakers: Speaker[], filterFavorites: boolean): Speaker[] {
    if (!filterFavorites) return speakers;

    const favoriteIds = this.favorites.map(f => f._id);

    return speakers.filter(speaker => favoriteIds.includes(speaker._id));
  }

}
