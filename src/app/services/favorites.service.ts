import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction, DocumentSnapshot, Action } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { FavCharacters } from '../models/fav-characters';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesCollection: AngularFirestoreCollection<FavCharacters>;

  constructor(private db: AngularFirestore) {
    this.favoritesCollection = this.db.collection<FavCharacters>('favorites');
  }

  getListOfFavorites(userId: string): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    return this.favoritesCollection.ref.where('userId', '==', userId).get();
  }

  addToFavorites(userId: string, characterId: number): Promise<void> {
    return this.favoritesCollection.ref.where('userId', '==', userId).get().then((res) => {
      if (res.docs.length <= 0) {
        this.favoritesCollection.add({
          userId,
          favorites: [characterId],
        }).then((res) => {
          console.log(res.id);
        });
      } else {
        let newFavorites = [...res.docs[0].get('favorites')];

        if ((res.docs[0].get('favorites') as Array<number>).includes(
          characterId
        )
        ) {
          newFavorites = newFavorites.filter((item) => item !== characterId);
        } else {
          newFavorites.push(characterId);
        }
        const favDoc: FavCharacters = {
          id: res.docs[0].id,
          userId: res.docs[0].get('userId'),
          favorites: newFavorites,
        };
        this.favoritesCollection.doc<FavCharacters>(favDoc.id).update({
          userId: favDoc.userId,
          favorites: favDoc.favorites,
        });
      }
    });
  }
}
