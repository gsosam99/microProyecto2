import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  API_URL = "https://rickandmortyapi.com/api";
  API_CHARACTERS = "https://rickandmortyapi.com/api/character";
  API_LOCATIONS = "https://rickandmortyapi.com/api/location";
  API_EPISODES = "https://rickandmortyapi.com/api/episode";

  constructor() { }
  
  getAllCharacters(page: number): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page);
  };

  getCharacterDetail(id: number): Promise<AxiosResponse<Character>>{
    return Axios.get(this.API_CHARACTERS+"/"+id);
  };

  getAllCharactersName(page: number,name: string): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page+"&name="+name);
  };

  getAllCharactersStatus(page: number,status: string): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page+"&status="+status);
  };

  getAllCharactersSpecies(page: number,species: string): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page+"&species="+species);
  };

  getAllCharactersType(page: number,type: string): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page+"&type="+type);
  };

  getAllCharactersGender(page: number,gender: string): Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_CHARACTERS+"/?page="+page+"&gender="+gender);
  };

  getAllLocations(page: number):Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_LOCATIONS+"/?page="+page);
  };

  getAllEpisodes(page: number):Promise<AxiosResponse<Array<Character>>>{
    return Axios.get(this.API_EPISODES+"/?page="+page);
  };

}
