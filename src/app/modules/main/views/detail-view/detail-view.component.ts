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
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  character: Character = null;
  loading = false;

  api: any;

  usuario: firebase.User = null;

  constructor(private apiRequest: ApiRequestService, private router: Router, public afAuth: AngularFireAuth, private FavoriteService: FavoritesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const characterId = params.get('characterId')
      this.getCharacterDetail(parseInt(characterId, 10))
      console.log(characterId)
    })
  }

  ngOnInit(): void {
  }

  getCharacterDetail(id: number): void {
    this.loading = true;
    this.apiRequest
      .getCharacterDetail(id)
      .then((response) => {
        console.log('response', response);
        this.character = response.data;
        this.loading = false;
      });
  }
}
