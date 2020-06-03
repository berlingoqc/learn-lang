import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, AfterContentInit, ContentChildren } from '@angular/core';
import { AudioInputComponent } from '../audio-input.component';
import { AudioService } from '../../service';

@Component({
  selector: 'app-audio-input-group',
  template: `
<ng-content></ng-content>

<div class="base">
  <div class="container">
    <button mat-stroked-button [disabled]="!canPlay" (click)="playAll()">Joué</button>
  </div>
</div>
  `,
  styles: [
    `
      .base {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        width: 80%;
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
      }
    `
  ]
})
export class AudioInputGroupComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChildren(AudioInputComponent) inputs: QueryList<AudioInputComponent>;

  constructor(private audioServie: AudioService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
  }

  get canPlay(): boolean {
    if(this.inputs.find(x => !x.urlRecorded)) {
      return false;
    }
    return true;
  }


  playAll() {
    let loopFn;
    const toPlay = this.inputs.toArray();
    const sub = this.audioServie.audioPlayer.event.asObservable().subscribe(d => {
      if(d.name === 'ended') {
        setTimeout(loopFn, 500);
      }
    });
    loopFn = () => {
      if(toPlay.length <= 0) {
        sub.unsubscribe();
        return;
      }
      const item = toPlay.splice(0,1)[0];
      item.play();
    }
    loopFn(this.inputs.toArray());
  }

}
