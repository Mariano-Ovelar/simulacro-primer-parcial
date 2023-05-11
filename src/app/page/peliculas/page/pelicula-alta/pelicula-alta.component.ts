import { Component } from '@angular/core';
import { tipoPelicula } from 'src/app/models/pelicula';
import { Pelicula } from 'src/app/models/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss'],
})
export class PeliculaAltaComponent {
  constructor(
    private peliculaSrv: PeliculaService,
    private actorSrv: ActorService
  ) {}

  actorSelecionado?: any;
  pelicula: Pelicula = {
    id: 0,
    nombre: '',
    tipo: tipoPelicula.amor,
    fechaEstreno: new Date(),
    cantidadPublico: 0,
    fotoPelicula: '',
  };

  listaActores:any;

  ngOnInit() {
    this.actorSrv.traer().then((actores) => {
      this.listaActores = actores;
    });
  }

  selecionPais($event: any) {
    this.actorSelecionado = $event;
  }
  guardar() {
    console.log(this.pelicula);
    this.peliculaSrv.guardar(this.pelicula);
  }
}
