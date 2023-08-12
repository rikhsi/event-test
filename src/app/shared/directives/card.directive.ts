import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[eventCard]'
})
export class CardDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.classList.add('active');
    setTimeout(() => {
      this.el.nativeElement.classList.remove('active');
    }, 600);
  }
}
