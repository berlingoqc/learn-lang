import { Injectable, ElementRef } from '@angular/core';


declare var MediaRecorder: any;

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  static MicroDeviceKey = 'alb-selected-micro';


  audioPlayer: AudioPlayer;

  set id(i: string) {

  }

  get id(): string {
    return null;
  }

  constructor() {
    this.audioPlayer = new AudioPlayer();
  }


  async getMediaStream(id?: string): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({ audio: (id) ? { deviceId: id } : true, video: false });
  }

  async validPermissions() {
    const result = await navigator.permissions.query({ name: 'microphone' });
    if (result.state === 'granted') {

    } else if (result.state === 'prompt') {

    } else if (result.state === 'denied') {

    }
    return result;
  }

  async startRecording(): Promise<TrackRecorder> {
    const mediaStream = await this.getMediaStream(this.id);

    const trackRecorder = new TrackRecorder(mediaStream);

    return trackRecorder;
  }
}

export class AudioAnalyserDisplayer {
  canvasContext: CanvasRenderingContext2D;
  analyser: AnalyserNode;
  stopped = false;


  constructor(
    private canvasElementRef: ElementRef<HTMLCanvasElement>,
    mediaStream: MediaStream) {
    this.canvasContext = this.canvasElementRef.nativeElement.getContext('2d');

    const context = new AudioContext();
    const source = context.createMediaStreamSource(mediaStream);

    this.analyser = context.createAnalyser();

    source.connect(this.analyser);
  }

  start() {
    this.frameLoopAnalyser();
  }

  stop() {
    this.stopped = false;
    this.canvasContext.clearRect(0, 0, this.canvasElementRef.nativeElement.width, this.canvasElementRef.nativeElement.height);
  }


  protected frameLoopAnalyser() {
    if (this.stopped) {
      return;
    }
    window.requestAnimationFrame(() => this.frameLoopAnalyser());

    const fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(fbcArray);

    this.canvasContext.clearRect(0, 0, this.canvasElementRef.nativeElement.width, this.canvasElementRef.nativeElement.height);
    this.canvasContext.fillStyle = '#00CCFFA';

    const bars = 100;
    for (let i = 0; i < bars; i++) {
      const barX = i * 3;
      const barWidth = 2;
      const barHeight = -(fbcArray[i] / 2);
      this.canvasContext.fillRect(barX, this.canvasElementRef.nativeElement.height, barWidth, barHeight);
    }
  }
}


// Record to the audio player and create a downloable link after that can be download
export class AudioFileLink {

}


export type AudioRessource = string | Blob;

// Playback a file with the displayer
export class AudioPlayer {
  private audioElementRef: HTMLAudioElement;

  filesList: AudioRessource[] = [];

  playing = false;

  constructor() {
    this.audioElementRef = document.createElement('audio');
    this.audioElementRef.addEventListener('ended', () => this.onStop());
    document.body.appendChild(this.audioElementRef);
  }

  playFile(file: AudioRessource) {
    this.filesList.push(file);
    this.audioLoop();
  }


  private onStop() {
    this.playing = false;
    if (this.filesList.length > 0) {
      this.audioLoop();
    }
  }

  private audioLoop() {
    console.log(this.filesList);
    const file = this.filesList.splice(0, 1)[0];
    this.playing = true;
    if (typeof file === 'string') {
      this.audioElementRef.src = file;
    } else {
      this.audioElementRef.src = URL.createObjectURL(file);
    }
    this.audioElementRef.play();
  }

}


// Enregistre une track audio depuis un media stream
export class TrackRecorder {

  mediaRecorder: any;
  recordedChunks = [];

  stopped = false;

  analyser: AudioAnalyserDisplayer;

  constructor(private mediaStream: MediaStream) {
    this.mediaRecorder = new MediaRecorder(this.mediaStream, { mimeType: 'audio/webm' });
    this.mediaRecorder.addEventListener('dataavailable', (e) => this.onDataAvailalbe(e));
  }

  addAnalyser(canvas: ElementRef<HTMLCanvasElement>): AudioAnalyserDisplayer {
    if (!this.analyser) {
      this.analyser = new AudioAnalyserDisplayer(canvas, this.mediaStream);
    }
    return this.analyser;
  }

  start(): Promise<Blob> {
    if (this.mediaRecorder) {
      this.mediaRecorder.start();
      if (this.analyser) {
        this.analyser.start();
      }
      return new Promise((resolve, reject) => {
        this.mediaRecorder.addEventListener('stop', () => {
          resolve(new Blob(this.recordedChunks));
        });
      });
    }
  }

  stop() {
    this.mediaRecorder.stop();
    this.mediaStream.getAudioTracks().forEach(x => {
      x.stop();
    });
    if (this.analyser) {
      this.analyser.stop();
      this.analyser = null;
    }
    this.mediaRecorder = null;
    this.stopped = true;
  }

  protected onDataAvailalbe(d: any) {
    if (d.data.size > 0) {
      this.recordedChunks.push(d.data);
    }
  }

}
