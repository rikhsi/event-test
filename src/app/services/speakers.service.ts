import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Speaker } from '../models/api/speaker-card';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  private url = 'assets/json/generated.json';
  private favoritesKey = 'favorites';
  private currentPage = 1;
  private readonly pageSize = 8;
  public allSpeakersLoaded = false;

  private speakersSubject: BehaviorSubject<Speaker[]> = new BehaviorSubject<Speaker[]>([]);
  public $speakersList: Observable<Speaker[]> = this.speakersSubject.asObservable();

  private favoritesSubject: BehaviorSubject<Speaker[]> = new BehaviorSubject<Speaker[]>(this.getFavorites());
  public favorites$ = this.favoritesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPage();
  }

  public loadMoreSpeakers(): void {
    if (!this.allSpeakersLoaded) this.loadPage();
  }

  private loadPage(): void {
    this.http.get<Speaker[]>(this.url)
      .subscribe(speakers => {
        const pageSpeakers = speakers.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        if (pageSpeakers.length < this.pageSize) {
          this.allSpeakersLoaded = true;
        }
        const currentSpeakers = this.speakersSubject.getValue();
        this.speakersSubject.next([...currentSpeakers, ...pageSpeakers]);
        this.currentPage++;
      });
  }

  public addFavorite(speaker: Speaker): void {
    const favorites = this.getFavorites();
    favorites.push(speaker);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  public removeFavorite(speaker: Speaker): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(f => f._id !== speaker._id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  public getFavorites(): Speaker[] {
    const storedFavorites = localStorage.getItem(this.favoritesKey);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  public isFavorite(speaker: Speaker): boolean {
    const favorites = this.getFavorites();
    return favorites.some(item => item._id === speaker._id);
  }
}