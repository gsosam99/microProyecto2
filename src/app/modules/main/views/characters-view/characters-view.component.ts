import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {

  characters: Array<Character> = [];

  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void{
    this.apiRequest
    .getAllCharacters()
    .then((response) => {
      console.log('response', response);
      this.characters = response.data;
    })
    .catch((error) => {});
  }
}
