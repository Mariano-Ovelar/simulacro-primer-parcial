import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './page/busqueda/busqueda.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./page/peliculas/peliculas.module').then(
        (m) => m.PeliculasModule
      ),
  },
  {
    path: 'actor',
    loadChildren: () =>
      import('./page/actor/actor.module').then((m) => m.ActorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
