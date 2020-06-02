import { AudioAnalyserDisplayer } from './analyser-displayer';
import { ElementRef } from '@angular/core';


declare var MediaRecorder: any;

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
  