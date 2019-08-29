import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  name= new FormControl('');
  type= new FormControl('');
  cp = new FormControl('');
  generation = new FormControl('');
  pokemons: any =[];
  constructor() { }

  ngOnInit() {
  }

  crear(){
    let data = { //llaves porque es un objeto a un objeto lo hace particular que tiene elementos
      name: this.name.value,
      type:this.type.value,
      cp: this.cp.value,
      generation: this.generation.value,
    }
    console.log('Datos formulario ',data);
    let dataAux=localStorage.getItem('pokemon');
    console.log('Datos Existentes',dataAux);

    if(dataAux){
      console.log("Hay datos");
/*       let dataAll= Object.assign(data, dataAux)//sirve para unir dos arreglos o dos objetos ;
      console.log(dataAll); */
      this.pokemons.push(data);
      /* this.pokemons.push(JSON.parse(dataAux)); */
      this.pokemons = Object.assign(this.pokemons, JSON.parse(dataAux));
      console.log(this.pokemons);
      localStorage.setItem('pokemon', JSON.stringify(this.pokemons));//json es para parsear el objeto y que pueda mostrarlo
      this.pokemons=[];
    }else{
      console.log("No hay datos");
      localStorage.setItem('pokemon', JSON.stringify(data));
    }


    
  }
}
