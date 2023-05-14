import { Pais } from './pais';

interface IActor {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  pais: Pais;
}

export class Actor {
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';
  pais: Pais = {
    nombre: '',
    bandera: '',
  };
}
