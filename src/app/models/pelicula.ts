
export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
interface IPelicula {
  id: number;
  nombre: string;
  tipo: tipoPelicula;
  fechaEstreno: Date;
  cantidadPublico: number;
  fotoPelicula: string;
}

export class Pelicula {
  id: number = 0;
  nombre: string = '';
  tipo: tipoPelicula = tipoPelicula.otros;
  fechaEstreno: Date = new Date();
  cantidadPublico: number = 0;
  fotoPelicula: string = '';
}
