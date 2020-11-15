import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FavCharacters } from 'src/app/models/fav-characters';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {

  isAuthenticated = false;
  user = this.authService.userDataSubject$;

  characters: Array<Character> = [];
  count: number;
  page: number;
  next: string;
  prev: string;
  status: string;
  api: any;
  inputName:string;
  inputSpecies: string;
  inputType: string;
  charactertId: string;
  usuario: firebase.User = null;
  constructor(private apiRequest: ApiRequestService, private authService: LoginService, private router: Router,public afAuth: AngularFireAuth, private FavoriteService: FavoritesService) { }

  

  ngOnInit(): void {
    // this.getCurrentUser();
    this.page = 1;
    this.getCharacters(this.page);
  }

  // getCurrentUser(): void {
  //   this.authService.getCurrentUser().subscribe((usuario) =>{
  //     this.usuario = usuario;
  //     if(usuario){
  //       this.FavoriteService.getListOfFavorites(usuario.uid).then((res)=> {
  //       if(res.docs.length > 0){
  //         this.characters.haveLike = (res.docs[0].get('favorites') as Array<number>)
  //       }
  //       });
  //     }else{
  //       this.characters.haveLike = false;
  //     }
  //   });
  // }

  createFavorites(newFavorite: Favorite): void{
    this.FavoriteService.createFavorites(newFavorite).then(res => {

    }).catch(err => console.log(err));
  }

  onSubmit(id: number, characterName: string, img: string): void {
    const newFavorite: Favorite = {
      characterId: id,
      name: characterName,
      image: img
    }
    this.createFavorites(newFavorite);
  }

  // addToFavorites(userId: string, characterId: number):void{
  //   this.FavoriteService.addToFavorites(userId, characterId).then(response => {});
  // }

  getCharacters(page: number): void {
    this.apiRequest
      .getAllCharacters(page)
      .then((response) => {
        console.log('response', response);
        this.api = response.data;
        this.characters = this.api.results;
        console.log(this.characters)
      })
      .catch((error) => { });
  }

  getName(page: number,name: string): void{
    this.apiRequest
    .getAllCharactersName(page,name)
    .then((response) => {
      console.log('response', response);
      this.api = response.data;
      this.characters = this.api.results;
      console.log(this.characters)
    })
    .catch((error) => { });
}

  getStatus(page: number, status: string): void {
    this.apiRequest
      .getAllCharactersStatus(page, status)
      .then((response) => {
        console.log('response', response);
        this.api = response.data;
        this.characters = this.api.results;
        console.log(this.characters)
      })
      .catch((error) => { });
  }

  getGender(page: number, gender: string): void {
    this.apiRequest
      .getAllCharactersGender(page, gender)
      .then((response) => {
        console.log('response', response);
        this.api = response.data;
        this.characters = this.api.results;
        console.log(this.characters)
      })
      .catch((error) => { });
  }

  getSpecies(page: number, species: string): void {
    this.apiRequest
      .getAllCharactersSpecies(page, species)
      .then((response) => {
        console.log('response', response);
        this.api = response.data;
        this.characters = this.api.results;
        console.log(this.characters)
      })
      .catch((error) => { });
  }

  getType(page: number, type: string): void {
    this.apiRequest
      .getAllCharactersType(page, type)
      .then((response) => {
        console.log('response', response);
        this.api = response.data;
        this.characters = this.api.results;
        console.log(this.characters)
      })
      .catch((error) => { });
  }

  getNextPage(): void {
    if (this.page == 20) {
      this.getCharacters(this.page)
    } else {
      this.page = this.page + 1;
      this.getCharacters(this.page)
    }
  }

  getPrevPage(): void {
    if (this.page == 1) {
      this.getCharacters(this.page)
    } else {
      this.page = this.page - 1;
      this.getCharacters(this.page)
    }
  }


}
