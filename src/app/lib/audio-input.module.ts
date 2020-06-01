import { NgModule } from '@angular/core';
import { AudioInputComponent } from './audio-input.component';
import { AudioService } from './audio.service';



@NgModule({
  declarations: [AudioInputComponent ],
  imports: [
  ],
  providers: [
    AudioService,
  ],
  exports: [AudioInputComponent]
})
export class AudioInputModule { }
