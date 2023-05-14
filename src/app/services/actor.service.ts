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
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  listaActores: any;
  constructor(private firestore: Firestore) {}

  async guardar(actor: Actor) {
    const col = collection(this.firestore, 'actores');
    // Guardar el objeto actor con un ID automático
    const docRef = await addDoc(col, actor);
    const id = docRef.id;

    // Actualizar el campo 'id' del objeto guardado
    const actorDocRef = doc(col, docRef.id);
    await setDoc(actorDocRef, { ...actor, id });
  }
  async traer() {
    const col = collection(this.firestore, 'actores');
    /*     const observable = collectionData(col);
     */
    const citySnapshot = await getDocs(col);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }
}
