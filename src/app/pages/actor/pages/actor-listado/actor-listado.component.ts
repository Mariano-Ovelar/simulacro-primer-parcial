import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss'],
})
export class ActorListadoComponent {
  listaActores = this.actorSrv.listaActores;

  constructor(private actorSrv: ActorService, private router: Router) {}

  ngOnInit() {
    this.actorSrv.traer().then(() => {
      this.listaActores = this.actorSrv.listaActores;
    });
  }
}
