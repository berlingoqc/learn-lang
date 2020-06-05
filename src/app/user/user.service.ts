import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, Config } from './model/user';



@Injectable({ providedIn: 'root'})
export class UserService {
  collection: AngularFirestoreCollection<User>;

  user: User;

  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection('users');
  }

  async initUserData(id: string) {
    const d = await this.collection.doc(id).get().toPromise();
    if(d.exists) {
      this.user = d.data() as User;
    }
  }

  async updateUserConfig(id: string, config: Config): Promise<void> {
    this.user.config = config;
    this.user.displayName = 'William Quintal';
    return this.collection.doc(id).update({config})
  }

  get isConfigure(): boolean {
    console.log(this.user);
    return !(!this.user.config);
  }

}
