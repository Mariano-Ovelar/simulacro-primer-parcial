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
  listaActores: any;
  actorSeleccionado: any;
  listaPeliculas: any;
  listaPeliculasFiltrada: any;
  constructor(
    private actorSrv: ActorService,
    private router: Router,
    private peliculaSrv: PeliculaService
  ) {}

  ngOnInit() {
    this.actorSrv.traer().then((actores) => {
      this.listaActores = actores;
    });
    this.peliculaSrv.traer().then((peliculas) => {
      this.listaPeliculas = peliculas;
    });
  }
  actorElegido($event: any) {
    this.actorSeleccionado = $event;
    this.listaPeliculasFiltrada = this.listaPeliculas.filter(
      (objeto: any) => objeto.actor.id == this.actorSeleccionado.id
    );
     
    console.log("filtro");
    console.log(this.listaPeliculasFiltrada);
    console.log("actor");
    console.log(this.actorSeleccionado);
    console.log("peliculas");
    console.log(this.listaPeliculas);
    
  }
}
