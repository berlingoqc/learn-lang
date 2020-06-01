import { Component, AfterViewInit } from '@angular/core';
import { TrackRecorder, AudioService } from './lib/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learn-lang';

  download: any;
  recorder: TrackRecorder;

  constructor(public audioService: AudioService) {
    audioService.validPermissions().then(() => {
      console.log('PERMISSION VALIDATED');
    });
  }

  ngAfterViewInit() {
    this.download = document.getElementById('download');
  }
}
