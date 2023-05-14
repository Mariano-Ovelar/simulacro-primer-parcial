import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  { path: '', component: ActorComponent },
  { path: 'alta', component: ActorAltaComponent },
  { path: 'listado', component: ActorListadoComponent},
  { path: 'actorpelicula', component: ActorPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorRoutingModule {}
