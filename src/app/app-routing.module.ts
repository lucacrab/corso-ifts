import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MioformComponent } from './mioform/mioform.component'; //copiarlo da app.module.ts oppure in alcuni snippet viene importato in automatico
import { FormmultiploComponent } from './formmultiplo/formmultiplo.component';

const routes: Routes = [
  {path:"", component: MioformComponent}, //quando aggiungo un path devo prendere e inserire nell' import da app.module.ts "import { MioformComponent } from './mioform/mioform.component';"
  {path:"multiplo", component: FormmultiploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
