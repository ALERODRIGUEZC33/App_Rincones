import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoPage } from './promo.page';

const routes: Routes = [
  {
    path: '',
    component: PromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PromoPage]
})
export class PromoPageModule { }

