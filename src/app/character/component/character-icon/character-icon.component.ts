
import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../model/character';


const characters: Character[] = [
  {
    gender: 'f',
    name: 'Marina',
    thumbnail: '/assets/woman.svg'
  },
  {
    gender: 'm',
    name: 'William',
    thumbnail: '/assets/male-avatar-circle.svg'
  }
];

@Component({
  selector: 'app-character-icon',
  templateUrl: './character-icon.component.html',
  styleUrls: ['./character-icon.component.scss']
})
export class CharacterIconComponent implements OnInit {

  @Input() name: string;

  character: Character;

  constructor() { }

  ngOnInit(): void {
    this.character = characters.find(x => x.name === this.name);
  }

}
