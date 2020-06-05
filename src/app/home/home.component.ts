import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ClassroomService } from '../classroom/classroom.service';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  classrooms: QuerySnapshot<DocumentData>;
  constructor(public userService: UserService, private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.classroomService.getClassroom(this.userService.user.config.learningLang).then((classrooms) => {
      this.classrooms = classrooms;
    })
  }

}
