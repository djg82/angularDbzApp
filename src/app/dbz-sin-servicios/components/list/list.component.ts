import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  // template: `<p>list works!</p>`,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() // Con esto el CharacterList puede llegar como parametro <dbz-list [CharacterList]="characters"></dbz-list>
  public CharacterList: Character[] = [
    {
      name: 'Nombre por defecto',
      power: 0,
    },
  ];

  @Output()
  public onDeleteCharacterById: EventEmitter<number> = new EventEmitter<number>(); // solo es necesario uno, EventEmitter<number> o el <number> del new

  onDeleteCharacter(index: number): void {
    // console.log(index);
    this.onDeleteCharacterById.emit(index);
  }
}
