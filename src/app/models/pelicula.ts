export interface Pelicula {
  id: number;
  nombre: string;
  tipo: tipoPelicula;
  fechaEstreno: Date;
  cantidadPublico: number;
  fotoPelicula: string;
}
export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
