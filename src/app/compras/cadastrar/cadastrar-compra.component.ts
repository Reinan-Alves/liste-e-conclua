import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CompraService, Compra } from '../shared';

@Component({
  selector: 'app-cadastrar-compra',
  templateUrl: './cadastrar-compra.component.html',
  styleUrls: ['./cadastrar-compra.component.css'],
})
export class CadastrarCompraComponent implements OnInit {
  @ViewChild('formCompra', { static: true }) formCompra: NgForm;
  compra: Compra;

  constructor(private compraService: CompraService, private router: Router) {}

  ngOnInit() {
    this.compra = new Compra(0, '', false);
    this.reload();
  }

  reload(){
    if(localStorage.getItem('reload') === 'true'){
      localStorage.setItem('reload','false');
      location.reload();
    }
  }

  cadastrar(): void {
    if (this.formCompra.form.valid) {
      this.compraService.cadastrar(this.compra);
      this.router.navigate(['/compras']);
    }
  }
}
