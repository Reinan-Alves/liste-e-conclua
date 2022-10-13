import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';
import { ComoUsarComponent } from './como-usar';


// eslint-disable-next-line @typescript-eslint/naming-convention
export const TarefaRoutes: Routes = [
  { path: 'tarefas', redirectTo: 'tarefas/listar' },
  { path: 'tarefas/listar', component: ListarTarefaComponent },
  { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent },
  { path: 'tarefas/editar/:id', component: EditarTarefaComponent },
  { path: 'tarefas/como-usar', component: ComoUsarComponent },
];
