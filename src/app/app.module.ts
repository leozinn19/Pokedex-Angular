import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonCategoryComponent } from './pokemon-category/pokemon-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonCategoryComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pokemons/:category', component: PokemonCategoryComponent },
      {path: '', component: PokemonListComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
