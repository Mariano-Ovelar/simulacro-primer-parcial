import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculasListadoComponent } from './pages/peliculas-listado/peliculas-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculaAltaComponent } from './pages/peliculas-alta/peliculas-alta.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculasListadoComponent,
    PeliculaAltaComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
