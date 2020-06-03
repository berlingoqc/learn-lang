import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterIconComponent } from './component/character-icon/character-icon.component';



@NgModule({
  declarations: [CharacterIconComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterIconComponent]
})
export class CharacterModule { }
