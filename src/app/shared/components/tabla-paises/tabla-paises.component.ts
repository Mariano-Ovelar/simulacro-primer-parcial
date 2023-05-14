import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent {
  @Input() listaPaisesRecibida!: any;
  @Output() paisElegido: EventEmitter<any> = new EventEmitter<any>();

  
  selectedOption: any;

  onOptionSelected(option: number) {
    this.selectedOption = option;
    this.paisElegido.emit(option);
  }
}
