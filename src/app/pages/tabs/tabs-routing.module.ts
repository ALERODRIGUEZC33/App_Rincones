import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
        {
        path: 'detalleRestaurante',
        loadChildren: () => import('../detalleRestaurante/detalleRestaurante.module').then(m => m.DetalleRestaurantePageModule),
      },
        {
        path: 'detalleReserva',
        loadChildren: () => import('../detalleReserva/detalleReserva.module').then(m => m.DetalleReservaPageModule),
      },
   
      {
        path: 'reserva',
        loadChildren: () => import('../reserva/reserva.module').then(m => m.ReservaPageModule),
      },
       {
        path: 'promo',
        loadChildren: () => import('../promo/promo.module').then(m => m.PromoPageModule),
      },
        {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule),
      },
         {
        path: 'mejores',
        loadChildren: () => import('../mejores/mejores.module').then(m=> m.MejoresPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
