import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../service';

@Component({
  selector: 'app-micro-select',
  templateUrl: './micro-select.component.html',
  styleUrls: ['./micro-select.component.scss']
})
export class MicroSelectComponent implements OnInit {

  constructor(public audioService: AudioService) { }

  ngOnInit(): void {
  }

}
