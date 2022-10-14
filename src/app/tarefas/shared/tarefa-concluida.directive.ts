import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tarefaConcluida]',
})
export class TarefaConcluidaDirective {
  @Input() tarefaConcluida: boolean;
  constructor(private el: ElementRef) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
