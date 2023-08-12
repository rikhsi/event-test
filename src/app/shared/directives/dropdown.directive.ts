import { Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[eventDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.isOpen = false;
      }
    });
  }

  @HostListener('click', ['$event']) toggleOpen(event: Event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }
}
