import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCategoryComponent } from './pokemon-category.component';

describe('PokemonCategoryComponent', () => {
  let component: PokemonCategoryComponent;
  let fixture: ComponentFixture<PokemonCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
