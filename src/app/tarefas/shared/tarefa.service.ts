/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable()
export class TarefaService {
  constructor() {}

  listarTodos(): Tarefa[] {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  removerTodos(): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = [];
    //compras = compras.filter((tarefa) => tarefa.id !== id);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
