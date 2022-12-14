import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  load() {
    localStorage.setItem('reload','true');
  }
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover o item "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status do item "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
  removerTodos() {
    if (confirm('Deseja apagar todos os itens?')) {
      this.tarefaService.removerTodos();
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
}
