import { Component, Input } from "@angular/core";
import { LangItem } from '../model';

import { Langs } from '../component/lang-config-selector/lang-config-selector.component';

@Component({
  selector: 'app-lang-avatar',
  template: `
  <div class="flex-col center" *ngIf="lang">
      <img src="{{ lang.flag }}" width="75" />
      <span [innerHTML]="lang.name['fr']"></span>
  </div>
  `
})
export class LangAvatarComponent {

  @Input()
  set langId(id: string) {
    this.lang = Langs.find(x => x.accronyme === id);
  }
  @Input() lang: LangItem;

  constructor() {}
}
