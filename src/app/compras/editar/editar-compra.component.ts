import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CompraService, Compra } from '../shared';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css'],
})
export class EditarCompraComponent implements OnInit {
  @ViewChild('formCompra', { static: true }) formCompra: NgForm;
  compra: Compra;

  constructor(
    private compraService: CompraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const id = +this.route.snapshot.params['id'];
    this.compra = this.compraService.buscarPorId(id);
    this.reload();
  }
  reload(){
    if(localStorage.getItem('reload') === 'true'){
      localStorage.setItem('reload','false');
      location.reload();
    }
  }

  atualizar(): void {
    if (this.formCompra.form.valid) {
      this.compraService.atualizar(this.compra);
      this.router.navigate(['/compras']);
    }
  }
}
