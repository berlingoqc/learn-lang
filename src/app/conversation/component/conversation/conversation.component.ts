import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../../model/conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Input() displayLang: string = 'br';
  @Input() conversation: Conversation = {
    context: [],
    exchanges: [
      {
        characterId: 'Marina',
        text: {
          'fr': 'Salut william , sa va ?',
          'br': 'Oi william, tudo bem ?'
        }
      },
      {
        characterId: 'William',
        text: {
          'fr': 'Sa va bien, merci, à la prochaine',
          'br': 'tudo bom, obrigado, até logo'
        }
      }
    ],
    id: 'parc',
    name: 'Conversation au parc'
  };

  private innerMode: string = 'default';

  set mode(m: string) {
    this.innerMode = m;
    switch(this.innerMode) {
      case 'speaking':
        break;
      case 'correcting':
        break;
      case 'editing':
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }


  editRow() {

  }

  confirmRowEdit() {

  }

  addRow() {

  }

  deleteRow() {

  }

}
