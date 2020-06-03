import { Component, OnInit } from '@angular/core';
import { LangItem } from '../../model';

@Component({
  selector: 'app-lang-config-selector',
  templateUrl: './lang-config-selector.component.html',
  styleUrls: ['./lang-config-selector.component.scss']
})
export class LangConfigSelectorComponent implements OnInit {

  langs: LangItem[] = [
    {
      accronyme: 'en',
      flag: '/assets/flags/en.svg',
      name: {
        'en': 'English',
        'fr': 'Anglais',
        'br': 'Englese',
      }
    },
    {
      accronyme: 'fr',
      flag: '/assets/flags/fr.svg',
      name: {
        'en': 'French',
        'fr': 'Français',
        'br': 'Frencho',
      }
    },
    {
      accronyme: 'br',
      flag: '/assets/flags/br.svg',
      name: {
        'en': 'Portugais Brazil',
        'fr': 'Portugais Prazil',
        'br': 'Portugese Brazil'

      }
    }
  ];

  selectedOriginIndex: number;
  selectedLearningIndex: number;



  constructor() { }

  ngOnInit(): void {
  }


  getClass(item: string, index: number) {
    return (this[item] === index) ? 'selected' : '';
  }

  click(item: string, index: number) {
    this[item] = index;
  }

}
