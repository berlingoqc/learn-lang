import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomCardComponent } from './component/classroom-card/classroom-card.component';
import { LangModule } from '../lang/lang.module';



@NgModule({
  declarations: [ClassroomCardComponent],
  imports: [
    CommonModule,

    LangModule
  ],
  exports: [ClassroomCardComponent]
})
export class ClassroomModule { }
