import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss'],
})
export class PeliculasListadoComponent {
  peliculaMostrar!: any;
  peliculaModificar!: any;
  peliculaSelecionada!: any;
  listaPeliculas: any= this.peliculaSrv.listaPeliculas;

  constructor(
    private peliculaSrv: PeliculaService,
    private router: Router
  ) {
    this.peliculaSrv.traer();
  }
  ngOnInit() {
    this.peliculaSrv.traer().then((peliculas) => {
      this.listaPeliculas = peliculas;
    });
  }
 
  
}
