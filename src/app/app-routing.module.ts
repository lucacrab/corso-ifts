import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentoComponent } from './commento/commento.component';
import { ListaComponent } from './lista/lista.component';   //è stato fatto il routing da angular//se non presente copiamo questa riga di codice dal file app.module.ts

const routes: Routes = [
  {path:'',component: ListaComponent},
  {path:'commento',component: CommentoComponent},


]; //definiamo il path di navigazione

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
