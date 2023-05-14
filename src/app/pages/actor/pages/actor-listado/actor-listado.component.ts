import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent {
  listaActores:any;
  constructor(private actorSrv: ActorService,private router: Router) {}

  ngOnInit() {
    this.actorSrv.traer().then((actores) => {
      this.listaActores = actores;
    });
  }
}
