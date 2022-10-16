import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[compraConcluida]',
})
export class CompraConcluidaDirective {
  @Input() compraConcluida: boolean;
  constructor(private el: ElementRef) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    if (this.compraConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'orange';
    }
  }
}
