import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
console.log(uuid);


@Injectable({providedIn: 'root'})


export class DbzService {


  public character: Character[] = [{
    id: uuid(),
    name: "Krilin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power:15000
  },{
    id: uuid(),
    name: "vegeta",
    power: 10000
  }]

  addNewCharacter( Characters: Character): void {
    const newCharater: Character = {
      id: uuid(), ...Characters
    }
    this.character.push(newCharater);

  }

  // onDeleteCahracter(index: number): void {
  //   this.character.splice(index, 1);
  deleteCharacterById( id: string){
    this.character = this.character.filter( characters => characters.id !== id);
  }

  constructor() { }

}
