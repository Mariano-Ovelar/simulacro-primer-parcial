import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Pais } from 'src/app/models/pais';
import { ActorService } from 'src/app/services/actor.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss'],
})
export class ActorAltaComponent {
  isLoading = false;
  data: any[] = [];
  constructor(
    private actorSrv: ActorService,
    private router: Router,
    private paisSrv: PaisService
  ) {}

  ngOnInit() {
    this.llenarData();
  }
  llenarData() {
    this.paisSrv.getData().subscribe((data) => {
      this.listaPaises = data;
      console.log(this.listaPaises);
    });
  }
  paisSelecionado?: any;
  actor: Actor = {
    nombre: '',
    apellido: '',
    pais: { nombre: '', bandera: '' },
    fechaNacimiento: '',
  };

  listaPaises = [];

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
