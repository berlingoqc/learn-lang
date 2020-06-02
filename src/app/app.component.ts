import { Component, AfterViewInit } from '@angular/core';
import { AudioService } from './lib/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learn-lang';

  download: any;

  constructor(public audioService: AudioService) {
    audioService.validPermissions().then(() => {
      console.log('PERMISSION VALIDATED');
    });
  }

  ngAfterViewInit() {
    this.download = document.getElementById('download');
  }
}
