import { Pais } from './pais';

interface IActor {
  id?:string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  pais: Pais;
}

export class Actor {
  id?:string='';
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';
  pais: Pais = {
    nombre: '',
    bandera: '',
  };
}
