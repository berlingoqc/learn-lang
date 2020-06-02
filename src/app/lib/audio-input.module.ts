import { NgModule } from '@angular/core';
import { AudioInputComponent } from './component/audio-input.component';
import { AudioService } from './service/audio.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MicroSelectComponent } from './component/micro-select/micro-select.component';



@NgModule({
  declarations: [AudioInputComponent, MicroSelectComponent ],
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    AudioService,
  ],
  exports: [AudioInputComponent]
})
export class AudioInputModule { }
