import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ConversationComponent } from './component/conversation/conversation.component';
import { AudioInputModule } from '../lib/audio-input.module';
import { CharacterModule } from '../character/character.module';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ConversationComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,

    CharacterModule,
    AudioInputModule
  ],
  exports: [ ConversationComponent]
})
export class ConversationModule { }
