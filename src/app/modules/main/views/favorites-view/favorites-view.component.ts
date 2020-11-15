import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.scss']
})
export class FavoritesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
