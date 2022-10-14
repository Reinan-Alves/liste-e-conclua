import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { ComoUsarComponent } from './como-usar';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    ComoUsarComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [TarefaService],
})
export class TarefasModule {}
