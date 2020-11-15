import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-selected-character',
  templateUrl: './selected-character.component.html',
  styleUrls: ['./selected-character.component.scss']
})
export class SelectedCharacterComponent implements OnInit {

  characters: Array<Character> = [];
  api: any;


  constructor() { 
 
  }

  ngOnInit(): void {
  }


}
