import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaListadoComponent } from './page/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';
import { FormsModule } from '@angular/forms';
import { TablaActorComponent } from 'src/app/components/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule
  ]
})
export class PeliculasModule { }
