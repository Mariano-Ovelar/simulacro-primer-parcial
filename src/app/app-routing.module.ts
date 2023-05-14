import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./pages/bienvenido/bienvenido.module').then(
        (m) => m.BienvenidoModule
      ),
  },

  {
    path: 'busqueda',
    loadChildren: () =>
      import('./pages/busqueda/busqueda.module').then((m) => m.BusquedaModule),
  },

  {
    path: 'peliculas',
    loadChildren: () =>
      import('./pages/peliculas/peliculas.module').then(
        (m) => m.PeliculasModule
      ),
  },

  {
    path: 'actor',
    loadChildren: () =>
      import('./pages/actor/actor.module').then((m) => m.ActorModule),
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
