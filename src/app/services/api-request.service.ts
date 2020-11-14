import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  API_URL = "https://rickandmortyapi.com/api/";
  API_CHARACTERS = "https://rickandmortyapi.com/api/character";
  API_LOCATIONS = "https://rickandmortyapi.com/api/location";
  API_EPISODES = "https://rickandmortyapi.com/api/episode";

  constructor() { }

  getAllCharacters(): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_URL);
  }
}
