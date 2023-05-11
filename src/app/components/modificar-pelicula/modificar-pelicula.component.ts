import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula, tipoPelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.scss'],
})
export class ModificarPeliculaComponent {
  @Input() peliculaRecibida!: any;
  @Output() peliculaModificada: EventEmitter<any> = new EventEmitter<any>();
  generosPelicula = ['terror', 'comedia', 'amor', 'otros'];

  pelicula: Pelicula = {
    id: 0,
    nombre: '',
    tipo: tipoPelicula.amor,
    fechaEstreno: new Date(),
    cantidadPublico: 0,
    fotoPelicula: '',
  };
  ngOnChanges() {
    this.pelicula.id = this.peliculaRecibida.id;
    this.pelicula.nombre = this.peliculaRecibida.nombre;
    this.pelicula.tipo = this.peliculaRecibida.tipo;
    this.pelicula.fechaEstreno = this.peliculaRecibida.fechaEstreno;
    this.pelicula.cantidadPublico = this.peliculaRecibida.cantidadPublico;
    this.pelicula.fotoPelicula = this.peliculaRecibida.fotoPelicula;
  }

  modificar() {
    this.peliculaModificada.emit(this.pelicula);
  }
}
