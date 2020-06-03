import { ElementRef } from '@angular/core';
import { AudioAnalyserDisplayer } from './analyser-displayer';
import { Subject } from 'rxjs';


export type AudioRessource = string | Blob;

export interface AudioItem {
    data: AudioRessource;
    analyserCanvas?: ElementRef<HTMLCanvasElement>;
}

// Playback a file with the displayer
export class AudioPlayer {
  private audioElementRef: HTMLAudioElement;

  filesList: AudioItem[] = [];

  current: AudioItem;

  currentAnalyser: AudioAnalyserDisplayer;

  event: Subject<{name: string, data: any}> = new Subject();

  get playing(): boolean {
      return !this.audioElementRef.paused;
  }

  set playing(p: boolean) {
      if(p) {
          this.audioElementRef.play();
      } else {
          this.audioElementRef.pause();
      }
  }

  constructor() {
    this.resetAudioElement();
 }

  playFile(data: AudioItem) {
    this.filesList.push(data);
    this.audioLoop();
  }

  playPause() {
      this.playing = !this.playing;
  }

  private resetAudioElement() {
    if(this.audioElementRef) {
        document.body.removeChild(this.audioElementRef);
    }
    this.audioElementRef = document.createElement('audio');
    this.audioElementRef.addEventListener('ended', () => this.onStop());
    document.body.appendChild(this.audioElementRef);
  }

  private onStop() {
    this.playing = false;
    this.resetAudioElement();
    if (this.filesList.length > 0) {
      this.audioLoop();
    } else {
        this.currentAnalyser.stop();
        this.currentAnalyser.disconnect();
        this.event.next({name: 'ended', data: this.current.data})
        this.current = null;
    }
  }

  private audioLoop() {
    if(this.playing) {
      console.log('ALREADY PLAYING WAINTING');
      return;
    }
    const file = this.filesList.splice(0, 1)[0];
    console.log('PLATING', file.data);
    this.current = file;
    this.playing = true;
    if (typeof file.data === 'string') {
      this.audioElementRef.src = file.data;
    } else {
      this.audioElementRef.src = URL.createObjectURL(file.data);
    }
    this.audioElementRef.play();

    if(file.analyserCanvas) {
        this.currentAnalyser = new AudioAnalyserDisplayer(file.analyserCanvas, this.audioElementRef as any)
        this.currentAnalyser.id = this.audioElementRef.src;
        this.currentAnalyser.start();
    }
  }

}
