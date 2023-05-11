import { Pais } from "./pais";

export interface Actor {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  pais: Pais;
}
