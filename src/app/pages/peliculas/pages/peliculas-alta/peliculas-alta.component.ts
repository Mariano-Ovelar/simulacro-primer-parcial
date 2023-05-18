import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Fecha } from 'src/app/models/fecha';
import { tipoPelicula } from 'src/app/models/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.scss'],
})
export class PeliculaAltaComponent {
  movieForm!: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private peliculaSrv: PeliculaService,
    private actorSrv: ActorService,
    private router: Router
  ) {}

  actorSeleccionado?: any;
  /*   pelicula: any = {
    id: 0,
    nombre: '',
    tipo: tipoPelicula[0],
    fechaEstreno: Fecha.getFechaActual(),
    cantidadPublico: 0,
    fotoPelicula: '',
  }; */
  generosPelicula = ['terror', 'comedia', 'amor', 'otros'];
  listaActores: any;
  img: string = '';
  imgFile: any;

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaEstreno: [Fecha.getFechaActual(), Validators.required],
      tipo: [tipoPelicula[0], Validators.required],
      cantidadPublico: [0, Validators.required],
      actor: [''],
    });

    this.actorSrv.traer().then((actores) => {
      this.listaActores = actores;
    });
  }

  actorElegido($event: any) {
    this.actorSeleccionado = $event;
    this.movieForm.value.actor = this.actorSeleccionado;
  }

  guardar() {
    this.isLoading = true;
    this.movieForm.value.actor = this.actorSeleccionado;
    this.peliculaSrv.guardar(this.movieForm.value, this.imgFile).then(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/peliculas/listado');
      }, 3000);
    });
  }
  capturarFile($event: any) {
    const file: File = $event.target.files[0];
    const reader = new FileReader();
    this.imgFile = file;
    reader.onload = (e: any) => {
      this.img = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  private validarImagen(control: AbstractControl) {
    const file = control.value;
    if (file) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png'];
      const fileExtension = file.name
        .substr(file.name.lastIndexOf('.'))
        .toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        return null; // Imagen válida
      }
    }
    return { invalidImagen: true }; // Imagen inválida
  }
}
