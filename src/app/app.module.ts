import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ConversationModule } from './conversation/conversation.module';
import { AudioInputModule } from './lib/audio-input.module';
import { LangConfigSelectorComponent } from './lang/component/lang-config-selector/lang-config-selector.component';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    LangConfigSelectorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    AudioInputModule,
    ConversationModule,


    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(authService: AuthService) {

  }
}
