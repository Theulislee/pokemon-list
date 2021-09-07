import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons = ['Bulbasaur','Yvisaur','Venosaur','charmander','charmeleon', 'charizard',
  ];
}
