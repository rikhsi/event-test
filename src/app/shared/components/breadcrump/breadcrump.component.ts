import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrump } from 'src/app/models/components/breadcrump';

@Component({
  selector: 'event-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.sass']
})
export class BreadcrumpComponent implements OnInit {
  private _pagesList: Breadcrump[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setPages();
  }

  private setPages(): void {
    this._pagesList = [
      {route: '', title: 'Главная'},
      {route: '/speakers', title: 'Найти спикера'}
    ]
  }

  get pagesList (): Breadcrump[] {
    return this._pagesList;
  }

  public checkActivePage(route: string): boolean {
    return this.router.url === route;
  }

  public onNavigate(route: string): void {
    if(!this.checkActivePage(route)) this.router.navigate([route]);
  }
  
}
