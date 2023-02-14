import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [];
  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    try {
      const req = await this.httpClient
        .get<any>('http://localhost:8000/pokemons')
        .toPromise();
      this.pokemons = req;
      console.log(this.pokemons);
    } catch (error) {
      console.error(error);
    }
  }
}
