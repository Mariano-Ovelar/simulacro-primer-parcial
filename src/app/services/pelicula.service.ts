import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { Pelicula } from '../models/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  constructor(private firestore: Firestore) {}

  guardar(pelicula: Pelicula) {
    const col = collection(this.firestore, 'peliculas');
    addDoc(col, pelicula);
  }
  traer() {
    const col = collection(this.firestore, 'peliculas');
    const observable = collectionData(col);
    observable.subscribe((respuesta)=>{
      console.log(respuesta);
    })
  }
}
