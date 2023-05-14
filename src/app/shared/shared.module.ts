import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarPeliculaComponent } from './components/modificar-pelicula/modificar-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ModificarPeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    OverlayComponent,
    SpinnerComponent,
  ],
  exports: [
    NavbarComponent,
    ModificarPeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    OverlayComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule,FormsModule],
})
export class SharedModule {}
