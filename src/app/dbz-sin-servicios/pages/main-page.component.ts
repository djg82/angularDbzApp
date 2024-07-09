import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainBBZPageComponent {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
  ];
  onDeleteCharacter(id: number): void {
    this.characters.splice(id, 1);
  }
  onAddNewCaracter(character: Character): void {
    this.characters.push(character);
  }
}
