import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleRestaurantePage } from './detalleRestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), DetalleRestaurantePage]
})
export class DetalleRestaurantePageModule { }