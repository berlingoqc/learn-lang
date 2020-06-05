import { Component, AfterViewInit } from '@angular/core';
import { AudioService } from './lib/service';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learn-lang';

  download: any;

  constructor(public audioService: AudioService) {
    audioService.validPermissions().then(() => {
      console.log('PERMISSION VALIDATED');
    });
  }

  ngAfterViewInit() {
    this.download = document.getElementById('download');
  }
}


@Component({
  template: ''
})
export class LoginPage {


  constructor(private router: Router, private auth: AngularFireAuth,private firestore: AngularFirestore, private userService: UserService) {
    (this.auth as any).signInWithEmailAndPassword('william95quintalwilliam@outlook.com', 'Office2999pro').then((d) => {
      this.onSuccess(d.user);
    });
  }

  async onSuccess(event: any) {
    await this.userService.initUserData(event.uid);
    if(!this.userService.isConfigure) {
      this.router.navigate(['/init'], { queryParams: { uid: event.uid}});
    } else {
      this.router.navigate(['/home']);
    }
  }

  onCreateAccount() {
    this.router.navigate(['/register']);
  }
}


@Component({
  template: ''
})
export class RegisterPage {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }
}
