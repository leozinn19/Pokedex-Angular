import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-category',
  templateUrl: './pokemon-category.component.html',
  styleUrls: ['./pokemon-category.component.css'],
})
export class PokemonCategoryComponent {
  constructor(public pokemonService: PokemonService) {}
  @Input()
  pokemon: string | undefined;

  @Input()
  name: string | undefined;

  pegarPokemon(pokemon: any) {

    return `http://localhost:8000/pokemons/images/${pokemon}`;
  }
}
