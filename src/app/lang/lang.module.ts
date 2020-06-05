import { NgModule } from '@angular/core';
import { LangConfigSelectorComponent } from './component/lang-config-selector/lang-config-selector.component';
import { LangAvatarComponent } from './component/lang-avatar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [CommonModule],
  declarations: [LangConfigSelectorComponent, LangAvatarComponent],
  exports: [LangConfigSelectorComponent, LangAvatarComponent]
})
export class LangModule {

}
