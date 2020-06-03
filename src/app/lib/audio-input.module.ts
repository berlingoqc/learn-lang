import { NgModule } from '@angular/core';
import { AudioInputComponent } from './component/audio-input.component';
import { AudioService } from './service/audio.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MicroSelectComponent } from './component/micro-select/micro-select.component';
import { AudioInputGroupComponent } from './component/audio-input-group/audio-input-group.component';



@NgModule({
  declarations: [AudioInputComponent, MicroSelectComponent, AudioInputGroupComponent ],
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,

    MatMenuModule
  ],
  providers: [
    AudioService,
  ],
  exports: [AudioInputComponent, AudioInputGroupComponent]
})
export class AudioInputModule { }
