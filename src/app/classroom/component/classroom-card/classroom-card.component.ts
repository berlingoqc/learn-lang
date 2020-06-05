import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../../model/classroom';

@Component({
  selector: 'app-classroom-card',
  templateUrl: './classroom-card.component.html',
  styleUrls: ['./classroom-card.component.scss']
})
export class ClassroomCardComponent implements OnInit {

  @Input() classroom: Classroom;

  constructor() { }

  ngOnInit(): void {
  }

}
