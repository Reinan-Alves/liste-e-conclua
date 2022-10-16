import { Component, OnInit } from '@angular/core';

import { CompraService, Compra } from '../shared';

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css'],
})
export class ListarCompraComponent implements OnInit {
  compras: Compra[];
  total = 0;
  valores: number[];

  constructor(private compraService: CompraService) {}

  ngOnInit() {
    this.compras = this.listarTodos();
    this.carregarValores();
    this.gerarTotal();
  }

  listarTodos(): Compra[] {
    return this.compraService.listarTodos();
  }

  load() {
    localStorage.setItem('reload', 'true');
  }
  remover($event: any, compra: Compra): void {
    $event.preventDefault();
    if (confirm('Deseja remover o item "' + compra.nome + '"?')) {
      this.compraService.remover(compra.id);
      this.compras = this.compraService.listarTodos();
      this.gerarTotal();
    }
  }

  alterarStatus(compra: Compra): void {
    if (confirm('Deseja alterar o status do item "' + compra.nome + '"?')) {
      this.compraService.alterarStatus(compra.id);
      this.compras = this.compraService.listarTodos();
      location.reload();
    }
  }

  gerarValores(valor: string, compra: Compra) {
    const key = compra.id.toString();
    const valorLocal = valor.toString();
    localStorage.setItem(key, valorLocal);
    compra.valor = parseFloat(localStorage.getItem(key));
    this.gerarTotal();
    console.log(this.compras);
  }
  gerarTotal() {
    this.total = 0;
    this.compras.map((c) => {
      // eslint-disable-next-line use-isnan
      if (isNaN(c.valor)) {
        c.valor = 0;
      }

      this.total += c.valor;
      localStorage.setItem('total',this.total.toString());
      console.log(this.total);
    });
  }
  carregarValores() {
    this.compras.map((c) => {
      if (isNaN(c.valor)) {
        c.valor = 0;
      }
      const key = c.id.toString();

      c.valor = parseFloat(localStorage.getItem(key));
      if (isNaN(this.total)) {
        this.total = 0;
      }
      this.total = parseFloat(localStorage.getItem('total'));
    });
  }
}
