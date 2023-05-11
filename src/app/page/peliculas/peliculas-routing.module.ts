import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from './page/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './page/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'alta', component: PeliculaAltaComponent },
  { path: 'listado', component: PeliculaListadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
