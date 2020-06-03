import { MultiLangRessource, MultiLangString } from 'src/app/lang';
import { AudioRessource } from 'src/app/lib/audio';



export class ConversationItem {
  characterId: string;
  text: MultiLangString;
}

export class Conversation {
  id: string;
  name: string;
  context: string[];

  exchanges: ConversationItem[];
}


export class ConversationSpeak {
  conversationId?: string;
  conversation?: Conversation;

  exchanges: AudioRessource[];
}
