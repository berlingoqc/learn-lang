import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AudioService, TrackRecorder, AudioPlayer } from './audio.service';

@Component({
  selector: 'lib-audio-input',
  template: `
    <div>
      <button (click)="onPress()">Record</button>
      <button (click)="onRelease()">Stop</button>

      <canvas width="500" height="100px" #canvas></canvas>

      <audio #audio></audio>
    </div>
  `,
  styles: [
    `
      #canvas {
        width: 500px;
        height: 500px;
        background: #002D3C
      }
    `
  ]
})
export class AudioInputComponent implements OnInit, AfterViewInit {

  @ViewChild('audio') audioElementRef: ElementRef<HTMLAudioElement>;
  @ViewChild('canvas') canvasElementRef: ElementRef<HTMLCanvasElement>;

  recorder: TrackRecorder;
  audioPlayer: AudioPlayer;

  constructor(
    private audioService: AudioService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  async onPress() {
    if (!this.recorder) {
      this.recorder = await this.audioService.startRecording();
      this.recorder.addAnalyser(this.canvasElementRef);
      this.recorder.start().then((blob) => {
        this.audioService.audioPlayer.playFile(URL.createObjectURL(blob));
      });
    }

  }

  onRelease() {
    if (this.recorder) {
      this.recorder.stop();
      this.recorder = null;
    }

  }

}
