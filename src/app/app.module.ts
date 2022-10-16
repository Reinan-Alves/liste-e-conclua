import { HomePageComponent } from './home-page/home-page.component';
import { ComprasModule } from './compras/compras.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TarefasModule } from './tarefas';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  declarations: [AppComponent,HomePageComponent],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TarefasModule,
    ComprasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
