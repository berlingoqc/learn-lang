import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from '../service/audio.service';
import { TrackRecorder } from '../audio';

@Component({
  selector: 'lib-audio-input',
  template: `
    <div class="container">
      <button *ngIf="!urlRecorded" mat-icon-button (click)="toggleRecording()">
        <mat-icon *ngIf="!recorder">mic</mat-icon>
        <mat-icon *ngIf="recorder">pause_circle_outline</mat-icon>
      </button>

      <button *ngIf="urlRecorded && !audioService.audioPlayer.current" mat-icon-button (click)="audioService.audioPlayer.playFile({data:urlRecorded, analyserCanvas: canvasElementRef})">
        <mat-icon>play_circle_outline</mat-icon>
      </button>

      <button *ngIf="urlRecorded && audioService.audioPlayer.current" mat-icon-button (click)="audioService.audioPlayer.playPause()">
        <mat-icon *ngIf="!audioService.audioPlayer.playing">play_circle_outline</mat-icon>
        <mat-icon *ngIf="audioService.audioPlayer.playing">pause_circle_outline</mat-icon>
      </button>

      <canvas #canvas></canvas>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      canvas {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        background: #002D3C
      }
    `
  ]
})
export class AudioInputComponent implements OnInit, AfterViewInit {

  @ViewChild('audio') audioElementRef: ElementRef<HTMLAudioElement>;
  @ViewChild('canvas') canvasElementRef: ElementRef<HTMLCanvasElement>;

  recorder: TrackRecorder;

  urlRecorded: string;

  constructor(
    public audioService: AudioService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  async toggleRecording() {
    if (!this.recorder) {
      this.recorder = await this.audioService.startRecording();
      this.recorder.addAnalyser(this.canvasElementRef);
      this.recorder.start().then((blob) => {
        this.urlRecorded = URL.createObjectURL(blob);
      });
    } else {
      this.recorder.stop();
      this.recorder = null;
    }
  }

}
