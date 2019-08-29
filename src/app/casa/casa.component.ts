import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {
  pokemon : any = [
    {
      id: 1,
      name: 'Charizard',
      type: 'Fuego',
      cp: '3000',
      generation: '1er',
      image: 'assets/img/charizard.png'
    },
    {
      id: 2,
      name: 'Evee',
      type: 'Normal',
      cp: '700',
      generation: '1er',
      image: 'assets/img/evee.png'
    },
    {
      id:3,
      name: 'Pikachu',
      type: 'Electrico',
      cp: '30000',
      generation: '1er',
      image: 'assets/img/pikachu.jpg'
    },
    {
      id: 1,
      name: 'Charizard',
      type: 'Fuego',
      cp: '3000',
      generation: '1er',
      image: 'assets/img/charizard.png'
    },
  ];
  constructor() { 
    console.log('Entro en el constructor'); 
  }

  ngOnInit() {
  }

}


