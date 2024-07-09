import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Si llamo al metodo private, no lo puede usar en el html
  // El public es optativo, si no se pone por defecto es public
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }
  changeAge(): void {
    this.age = 20;
  }
  resetForm(): void {
    this.age = 45;
    this.name = 'iroman';
  }
}
