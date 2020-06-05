import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomCardComponent } from './component/classroom-card/classroom-card.component';
import { LangModule } from '../lang/lang.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ClassroomCardComponent],
  imports: [
    CommonModule,

    MatIconModule,

    LangModule
  ],
  exports: [ClassroomCardComponent]
})
export class ClassroomModule { }
