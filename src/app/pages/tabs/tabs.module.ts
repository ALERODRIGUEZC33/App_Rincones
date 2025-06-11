import { NgModule } from '@angular/core';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page'; // standalone

@NgModule({
  imports: [
    TabsPageRoutingModule,
    TabsPage // standalone componente
  ]
})
export class TabsPageModule {}
