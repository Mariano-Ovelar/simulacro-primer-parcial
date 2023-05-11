import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor.component';
import { ActorAltaComponent } from './page/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './page/actor-listado/actor-listado.component';

const routes: Routes = [
  { path: '', component: ActorComponent },
  { path: 'alta', component: ActorAltaComponent },
  { path: 'listado', component: ActorListadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorRoutingModule {}
