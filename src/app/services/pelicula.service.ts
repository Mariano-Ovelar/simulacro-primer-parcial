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
import {
  ref,
  FirebaseStorage,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { Storage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  listaPeliculas: any;
  constructor(private firestore: Firestore, private storage: Storage) {
  }

  async guardar(pelicula: Pelicula, imgFile: any) {
    const col = collection(this.firestore, 'peliculas');
    const imgRef = ref(this.storage, `img/${pelicula.nombre}`);
    uploadBytes(imgRef, imgFile)
      .then(() => {
        getDownloadURL(imgRef)
          .then((res) => {
            pelicula.fotoPelicula = res;
            addDoc(col, pelicula);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async traer() {
    const col = collection(this.firestore, 'peliculas');
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map((doc) => doc.data());
    this.listaPeliculas = list;
    localStorage.setItem('peliculas', JSON.stringify(this.listaPeliculas));
    return list;
  }
}
