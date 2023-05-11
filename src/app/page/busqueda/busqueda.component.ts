import { Component } from '@angular/core';
import { tipoPelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  peliculaMostrar!: any;
  peliculaModificar!: any;
  peliculaSelecionada!: any;
  flag: boolean = false;
  flag2: boolean = false;

  listaPeliculas = [
    {
      id: 1,
      nombre: 'Avengers',
      tipo: tipoPelicula[1],
      cantidadPublico: 220,
      fechaEstreno: '2023-02-01',
      fotoPelicula:
        'https://http2.mlstatic.com/D_NQ_NP_820569-MLA53102326806_122022-W.jpg',
    },
    {
      id: 2,
      nombre: 'Thor',
      tipo: tipoPelicula[2],
      cantidadPublico: 200,
      fechaEstreno: '2023-02-01',
      fotoPelicula:
        'https://i.pinimg.com/originals/b0/1b/1e/b01b1e1e5bb3f76fd5cea88f324c98b7.jpg',
    },
    {
      id: 3,
      nombre: 'Planeta de los simios',
      tipo: tipoPelicula[3],
      cantidadPublico: 320,
      fechaEstreno: '2023-02-01',
      fotoPelicula:
        'https://i.pinimg.com/originals/7d/bb/37/7dbb37d4051b4d5a94bb1c8d373259f0.jpg',
    },
    {
      id: 4,
      nombre: 'Transformers',
      tipo: tipoPelicula[0],
      cantidadPublico: 120,
      fechaEstreno: '2023-02-01',
      fotoPelicula:
        'https://i.pinimg.com/originals/42/1b/af/421baf7a3e31c891d7feb0b662b37e15.jpg',
    },
    {
      id: 5,
      nombre: 'Black panther',
      tipo: tipoPelicula[1],
      cantidadPublico: 230,
      fechaEstreno: '2023-02-01',
      fotoPelicula:
        'https://i.pinimg.com/originals/2a/46/79/2a4679f11df2984d147fdb967a83b0e6.jpg',
    },
  ];

  /* mostrar($event: any) {
    this.peliculaSelecionada = $event;
    this.flag=true;
  }
  modificar($event: any) {
    this.peliculaModificar = $event;
    this.flag2=true;
  } */
  peliculaEleguida($event: any) {
    this.peliculaSelecionada = $event;
    this.flag2 = true;
    this.flag = true;
  }
  modificarPelicula($event:any) {
    this.peliculaSelecionada.id = $event.id;
    this.peliculaSelecionada.nombre = $event.nombre;
    this.peliculaSelecionada.tipo = $event.tipo;
    this.peliculaSelecionada.fechaEstreno = $event.fechaEstreno;
    this.peliculaSelecionada.cantidadPublico = $event.cantidadPublico;
    this.peliculaSelecionada.fotoPelicula = $event.fotoPelicula;
  }
}
