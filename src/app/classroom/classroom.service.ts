import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Classroom } from './model/classroom';





@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private afs: AngularFirestore) {
  }


  async getClassroom(learningLang: string): Promise<QuerySnapshot<DocumentData>> {
    return this.afs.collection('classroom').ref.where('learningLang', '==', learningLang).get();
  }

}
