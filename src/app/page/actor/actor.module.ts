import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorAltaComponent } from './page/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './page/actor-listado/actor-listado.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActorComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule
  ]
})
export class ActorModule { }
