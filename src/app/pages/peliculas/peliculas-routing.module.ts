import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas.component';
import { PeliculasListadoComponent } from './pages/peliculas-listado/peliculas-listado.component';
import { PeliculaAltaComponent } from './pages/peliculas-alta/peliculas-alta.component';

const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'alta', component: PeliculaAltaComponent },
  { path: 'listado', component: PeliculasListadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
