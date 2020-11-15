export interface FavCharacters {
    id?:string;
    userId: string; //ID del usuario al que pertenece
    favorites: Array<number>; // Lista de ID de personajes
}
