import { Component, OnInit } from '@angular/core';
import { LangItem } from '../../model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';


export const Langs: LangItem[] = [
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

@Component({
  selector: 'app-lang-config-selector',
  templateUrl: './lang-config-selector.component.html',
  styleUrls: ['./lang-config-selector.component.scss']
})
export class LangConfigSelectorComponent implements OnInit {

  langs = Langs;

  selectedOriginIndex: number;
  selectedLearningIndex: number;


  get isValid(): boolean {
    return (this.selectedLearningIndex !== undefined && this.selectedOriginIndex !== undefined);
  }


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }


  getClass(item: string, index: number) {
    return (this[item] === index) ? 'selected' : '';
  }

  click(item: string, index: number) {
    this[item] = index;
  }


  confirm() {
    if(this.isValid) {
      this.userService.updateUserConfig(this.activatedRoute.snapshot.queryParams.uid, {
        learningLang: this.langs[this.selectedLearningIndex].accronyme,
        originLang: this.langs[this.selectedOriginIndex].accronyme
      }).then(() => {
        this.router.navigate(['/home']);

      });
    }
  }

}
