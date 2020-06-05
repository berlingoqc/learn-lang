import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxAuthFirebaseuiLoginComponent, NgxAuthFirebaseuiRegisterComponent, LoggedInGuard } from 'ngx-auth-firebaseui';
import { LangConfigSelectorComponent } from './lang/component/lang-config-selector/lang-config-selector.component';
import { LoginPage, RegisterPage } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'init',
    component: LangConfigSelectorComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
