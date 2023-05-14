import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Pais } from 'src/app/models/pais';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss'],
})
export class ActorAltaComponent {
  isLoading = false;

  constructor(private actorSrv: ActorService,private router: Router) {}

  paisSelecionado?: any;
  actor: Actor = {
    nombre: '',
    apellido: '',
    pais: { nombre: '', bandera: '' },
    fechaNacimiento: '',
  };

  listaPaises = [
    {
      nombre: 'Argentina',
      bandera:
        'https://cdn.icon-icons.com/icons2/3665/PNG/512/argentina_flag_icon_228621.png',
    },
    {
      nombre: 'España',
      bandera:
        'https://cdn.icon-icons.com/icons2/3665/PNG/512/spain_flag_icon_228692.png',
    },
    {
      nombre: 'Estados unidos',
      bandera:
        'https://cdn.icon-icons.com/icons2/3665/PNG/512/usa_flag_united_states_america_icon_228698.png',
    },
    {
      nombre: 'Brasil',
      bandera:
        'https://cdn.icon-icons.com/icons2/3665/PNG/512/brazil_flag_icon_228666.png',
    },
    {
      nombre: 'México',
      bandera:
        'https://cdn.icon-icons.com/icons2/3665/PNG/512/mexico_flag_icon_228684.png',
    },
  ];

  selecionPais($event: any) {
    this.paisSelecionado = $event;
    this.actor.pais = this.paisSelecionado;
  }
  guardar() {
    this.isLoading = true;

    console.log(this.actor);
    this.actorSrv.guardar(this.actor).then(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/actor/listado');
      }, 3000);
    });
  }
}
