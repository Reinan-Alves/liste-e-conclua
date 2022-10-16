import { Routes } from '@angular/router';
import { CadastrarCompraComponent } from './cadastrar';
import { EditarCompraComponent } from './editar';
import { ListarCompraComponent } from './listar';


// eslint-disable-next-line @typescript-eslint/naming-convention
export const CompraRoutes: Routes = [
  { path: 'compras', redirectTo: 'compras/listar' },
  { path: 'compras/listar', component: ListarCompraComponent },
  { path: 'compras/cadastrar', component: CadastrarCompraComponent },
  { path: 'compras/editar/:id', component: EditarCompraComponent },
];
