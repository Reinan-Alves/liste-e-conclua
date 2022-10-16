/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Compra } from '.';

@Injectable()
export class CompraService {
  constructor() {}

  listarTodos(): Compra[] {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const compras = localStorage['compras'];
    return compras ? JSON.parse(compras) : [];
  }

  cadastrar(compra: Compra): void {
    const compras = this.listarTodos();
    compra.id = new Date().getTime();
    compras.push(compra);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['compras'] = JSON.stringify(compras);
  }

  buscarPorId(id: number): Compra {
    const compras: Compra[] = this.listarTodos();
    return compras.find((compra) => compra.id === id);
  }

  atualizar(compra: Compra): void {
    const compras: Compra[] = this.listarTodos();
    compras.forEach((obj, index, objs) => {
      if (compra.id === obj.id) {
        objs[index] = compra;
      }
    });
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['compras'] = JSON.stringify(compras);
  }

  remover(id: number): void {
    let compras: Compra[] = this.listarTodos();
    compras = compras.filter((tarefa) => tarefa.id !== id);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['compras'] = JSON.stringify(compras);
  }

  removerTodos(): void {
    let compras: Compra[] = this.listarTodos();
    compras = [];
    //compras = compras.filter((tarefa) => tarefa.id !== id);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['compras'] = JSON.stringify(compras);
  }

  alterarStatus(id: number): void {
    const compras: Compra[] = this.listarTodos();
    compras.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['compras'] = JSON.stringify(compras);
  }
}
