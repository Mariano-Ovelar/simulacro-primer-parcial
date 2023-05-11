import { Component, Output, Input, EventEmitter } from '@angular/core';
import { tipoPelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss'],
})
export class TablaPeliculaComponent {
  @Output() peliculaSelecionada: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaPeliculasRecibida!: any;


  selecionar(pelicula: any) {
    this.peliculaSelecionada.emit(pelicula);
  }
}
