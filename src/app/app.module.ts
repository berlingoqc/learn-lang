import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, LoginPage, RegisterPage } from './app.component';
import { ConversationModule } from './conversation/conversation.module';
import { AudioInputModule } from './lib/audio-input.module';
import { CommonModule } from '@angular/common';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { LangModule } from './lang/lang.module';
import { ClassroomModule } from './classroom/classroom.module';





@NgModule({
  declarations: [
    AppComponent,

    LoginPage,
    RegisterPage,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    AudioInputModule,
    ClassroomModule,
    ConversationModule,
    LangModule,


    NgxAuthFirebaseUIModule.forRoot(environment.firebase, null,
    {
      authGuardFallbackURL: '/login',
      authGuardLoggedInURL: '/init'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(fi: AngularFirestore) {
    fi.firestore.enablePersistence();
    //fi.firestore.settings({ experimentalForceLongPolling: true });
  }
}
