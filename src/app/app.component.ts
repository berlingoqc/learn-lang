import { Component, AfterViewInit } from '@angular/core';
import { AudioService } from './lib/service';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';

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
  template: `<ngx-auth-firebaseui-login (onCreateAccountRequested)="onCreateAccount()" (onSuccess)="onSuccess($event)"></ngx-auth-firebaseui-login>`,
})
export class LoginPage {


  constructor(private router: Router, private userService: UserService) {

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
  template: `<ngx-auth-firebaseui-register (onSuccess)="onLogin()" (onLoginRequested)="onLogin()"><ngx-auth-firebaseui-register>`
})
export class RegisterPage {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }
}
