import { Injectable, ElementRef } from '@angular/core';
import { AudioPlayer, TrackRecorder } from '../audio';
import { Subject } from 'rxjs';


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
    navigator.mediaDevices.enumerateDevices().then((D) => console.log(D));
  }


  async getMediaStream(id?: string): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({ audio: (id) ? { deviceId: id } : true, video: false });
  }

  async getMicroDevice(): Promise<MediaDeviceInfo[]> {
    return (await navigator.mediaDevices.enumerateDevices())
              .filter((d) => d.kind == 'audioinput');
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




