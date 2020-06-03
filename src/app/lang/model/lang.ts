



export type MultiLangRessource<T> = { [id:string]: T};
export type MultiLangString = MultiLangRessource<String>;



export class LangItem {
  accronyme: string;
  flag: string;
  name: MultiLangString;
}



export class LangConfig {
  learning: string;
  origin: string;
}
