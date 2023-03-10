import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  pokemon: string | undefined;

  @Input()
  number!: number;
  
  pegarImagemPokemon(pokemon: any) {
    //let pokemonName = this.pokemonService;

    return `http://localhost:8000/pokemons/images/${pokemon}`;
  }
  

  
}
