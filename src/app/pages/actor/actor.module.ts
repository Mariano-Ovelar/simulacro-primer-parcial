import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    ActorComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    ActorPeliculaComponent,
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ActorModule { }
