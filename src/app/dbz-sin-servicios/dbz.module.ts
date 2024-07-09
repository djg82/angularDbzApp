import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBBZPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainBBZPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainBBZPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
