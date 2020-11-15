import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Favorite } from 'src/app/models/favorite';


@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {

  favorites: Array<Favorite> = [];
  loading: boolean;

  constructor(private FavoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.getAllFavorites();
  }

  getAllFavorites(): void {
    this.FavoritesService.getAllFavorites().subscribe((items) => {
      this.favorites = items.map (
        (item) => 
        ({
          ...item.payload.doc.data(),
          $key: item.payload.doc.id,
        } as Favorite)
      );
    });
  }

  deleteFavorite(characterId: number): void{
    this.FavoritesService.deleteFavorite(characterId.toString()).then((res) => {}).catch((err)=>console.log(err));
  }
}
