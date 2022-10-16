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
  spinner = false;

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
      this.ativarSpinner();
      location.reload();
    }
  }

  removerTodos() {
    if (confirm('Deseja apagar todos os itens?')) {
      this.compraService.removerTodos();
      this.compras = this.compraService.listarTodos();
      this.gerarTotal();
      this.ativarSpinner();
      location.reload();
    }
  }

  alterarStatus(compra: Compra): void {
    if (confirm('Deseja alterar o status do item "' + compra.nome + '"?')) {
      this.compraService.alterarStatus(compra.id);
      this.compras = this.compraService.listarTodos();
      this.ativarSpinner();
      location.reload();
    }
  }

  gerarValores(valor: string, compra: Compra) {
    const key = compra.id.toString();
    const valorLocal = valor;
    localStorage.setItem(key, valorLocal);
    compra.valor = parseFloat(localStorage.getItem(key));
    this.gerarTotal();
  }
  gerarTotal() {
    this.total = 0;
    this.compras.map((c) => {
      if (isNaN(c.valor)) {
        c.valor = 0;
      }

      this.total += c.valor;
      localStorage.setItem('total', this.total.toString());
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
  ativarSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 300);
  }
  // isNumeric(val: string) {
  //   return !isNaN(parseFloat(val)) && isFinite(parseFloat(val));
  // }
}
