import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompraService, CompraConcluidaDirective } from './shared';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ListarCompraComponent } from './listar';
import { CadastrarCompraComponent } from './cadastrar';
import { EditarCompraComponent } from './editar';


@NgModule({
  declarations: [
    ListarCompraComponent,
    CadastrarCompraComponent,
    EditarCompraComponent,
    CompraConcluidaDirective,
  ],
  imports: [
    IonicModule.forRoot(),
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [CompraService],
})
export class ComprasModule {}
