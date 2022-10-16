import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraRoutes } from './compras';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
path: 'home',component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'home',

    pathMatch: 'full',
  },
  ...TarefaRoutes,...CompraRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
