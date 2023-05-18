import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  setDoc,
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
  listaPeliculas: any = null;
  constructor(private firestore: Firestore, private storage: Storage) {
    this.actualizarLista();
  }

  async guardar(pelicula: Pelicula, imgFile: any) {
    const col = collection(this.firestore, 'peliculas');
    const imgRef = ref(this.storage, `img/${pelicula.nombre}`);
    pelicula.id = col.id;
    uploadBytes(imgRef, imgFile)
      .then(() => {
        getDownloadURL(imgRef)
          .then(async (res) => {
            pelicula.fotoPelicula = res;
            const docRef = await addDoc(col, pelicula);
            const id = docRef.id;

            // Actualizar el campo 'id' del objeto guardado
            const actorDocRef = doc(col, docRef.id);
            await setDoc(actorDocRef, { ...pelicula, id });
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
    localStorage.setItem('peliculas', JSON.stringify(list));
    this.actualizarLista();
    return list;
  }

  actualizarLista() {
    this.listaPeliculas = JSON.parse(String(localStorage.getItem('peliculas')));
  }
}
