import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  pokemon: string | undefined;

  @Input()
  number!: number;

  pegarImagemPokemon() {
    let pokemonID = this.leadingZero(this.number);

    return `http://localhost:8000/pokemons/images/${pokemonID}`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
