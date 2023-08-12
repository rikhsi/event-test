import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'event-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy{
  @Input() field_ID!: string;

  @Output() shareValue = new EventEmitter<string>();

  public searchControl: FormControl = new FormControl('');
  public isFocusedSearch: boolean = false;

  private sub$!: Subscription;
 
  constructor() {}

  ngOnInit(): void {
    this.onChangeSearch();
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

  private onChangeSearch(): void {
    this.sub$ = this.searchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe((value) => {
        this.shareValue.emit(value);
    });
  }

  public onFocuseSearch(state: boolean): void {
    this.isFocusedSearch = state;
  }

  public clearForm(): void {
    this.searchControl.reset('');
  }
}
