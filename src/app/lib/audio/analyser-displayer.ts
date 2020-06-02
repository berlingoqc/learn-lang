import { ElementRef } from '@angular/core';

export class AudioAnalyserDisplayer {
    id: string;
    canvasContext: CanvasRenderingContext2D;
    analyser: AnalyserNode;
    source: any;
    stopped = false;
  
  
    constructor(
      private canvasElementRef: ElementRef<HTMLCanvasElement>,
      mediaStream: MediaStream | HTMLAudioElement) {
      this.canvasContext = this.canvasElementRef.nativeElement.getContext('2d');
  
      const context = new AudioContext();
      this.source;

      if(mediaStream instanceof MediaStream) {
        this.source = context.createMediaStreamSource(mediaStream);
      } else {
          this.source = context.createMediaElementSource(mediaStream);
      }
      this.analyser = context.createAnalyser();
  
      this.source.connect(this.analyser);

      if(mediaStream instanceof HTMLAudioElement) {
          this.analyser.connect(context.destination);
      }
    }
  
    start() {
      this.frameLoopAnalyser();
    }
  
    stop() {
      this.stopped = false;
      this.canvasContext.clearRect(0, 0, this.canvasElementRef.nativeElement.width, this.canvasElementRef.nativeElement.height);
    }

    disconnect() {
        this.analyser.disconnect();
        this.source.disconnect();
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
      const barWidth = 2;
      for (let i = 0; i < bars; i++) {
        const barX = i * 3;
        const barHeight = -(fbcArray[i] / 2);
        this.canvasContext.fillRect(barX, this.canvasElementRef.nativeElement.height, barWidth, barHeight);
      }
    }
  }
  