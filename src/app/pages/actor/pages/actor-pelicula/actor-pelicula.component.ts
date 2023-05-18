import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss'],
})
export class ActorPeliculaComponent {
  listaActores = this.actorSrv.listaActores;
  listaPeliculas = this.peliculaSrv.listaPeliculas;

  actorSeleccionado: any;
  listaPeliculasFiltrada: any;
  constructor(
    private actorSrv: ActorService,
    private router: Router,
    private peliculaSrv: PeliculaService
  ) {}

  ngOnInit() {
    this.actorSrv.traer().then(() => {
      this.listaActores = this.actorSrv.listaActores;
    });
    this.peliculaSrv.traer().then(() => {
      this.listaPeliculas = this.peliculaSrv.listaPeliculas;
    });
  }
  actorElegido($event: any) {
    this.actorSeleccionado = $event;
    this.listaPeliculasFiltrada = this.listaPeliculas.filter(
      (objeto: any) => objeto.actor.id == this.actorSeleccionado.id
    );

    console.log('filtro');
    console.log(this.listaPeliculasFiltrada);
    console.log('actor');
    console.log(this.actorSeleccionado);
    console.log('peliculas');
    console.log(this.listaPeliculas);
  }
}
