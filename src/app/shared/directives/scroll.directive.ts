import { Directive, HostListener, Output, EventEmitter, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[eventScroll]'
})
export class ScrollDirective implements OnInit, OnDestroy {
  @Output() scrolledToEnd: EventEmitter<void> = new EventEmitter();
  
  private lastScrollPosition = 0;
  private $sub!: Subscription;
  private scrollSubject = new Subject<void>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.$sub = this.scrollSubject.pipe(
      debounceTime(100)
    ).subscribe(() => {
      this.scrolledToEnd.emit();
    });
  }

  ngOnDestroy(): void {
    this.$sub?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > this.lastScrollPosition) {
      const elementPosition = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
      if (scrollPosition + window.innerHeight >= elementPosition) {
        this.scrollSubject.next();
      }
    }

    this.lastScrollPosition = scrollPosition;
  }

}
