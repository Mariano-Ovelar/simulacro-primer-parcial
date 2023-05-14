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
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  listaActores: any;
  constructor(private firestore: Firestore) {}

  async guardar(actor: Actor) {
    const col = collection(this.firestore, 'actores');
    addDoc(col, actor);
    
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
