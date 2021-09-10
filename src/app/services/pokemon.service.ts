import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
 pokemons = [{name: "electrode", url: "https://pokeapi.co/api/v2/pokemon/101/"}];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
   }

  async carregarPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();
  
    this.pokemons = requisicao.results;

  }
}
