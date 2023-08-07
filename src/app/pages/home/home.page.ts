import { Component, OnInit } from '@angular/core';
import { Contents } from 'src/app/models/contents.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  contents!: Contents[];
  constructor() { }

  ngOnInit() {
    this.contents = [
      { 
        name: 'Personal Online',
        type: 'workout',
        list: [
          { name: 'Levantamento de Peso', img: '../../assets/images/man.png' },
          { name: 'Yoga', img: '../../assets/images/man.png' },
        ],
      },
      { 
        name: 'Programas',
        type: 'class',
        list: [
          { name: 'Levantamento de Peso', status: 'Continue treinando', img: '../../assets/images/man.png' },
          { name: 'Yoga', status: 'Treinar', img: '../../assets/images/man.png'  },
          { name: 'Hapkido', status: 'Treinar', img: '../../assets/images/man.png'  },
        ],
      }
    ];
  }

}
