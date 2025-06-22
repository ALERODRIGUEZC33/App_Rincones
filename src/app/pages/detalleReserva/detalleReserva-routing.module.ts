import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleReservaPage } from './detalleReserva.page';
const routes: Routes = [
  {
    path: '',
    component: DetalleReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleReservaPageRoutingModule { }