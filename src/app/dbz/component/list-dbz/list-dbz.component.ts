import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDbzComponent {


  @Input()
  public characterList: Character[] = [{
    name: "trunks",
    power: 1000
  }, {
    name: "picoro",
    power:15000
  }]

  // @Output()
  // onDelete = Index : value : number;


  @Output()
 public  onDelete: EventEmitter<string> = new EventEmitter();


  onDeleleteCharacters(id?: string) {
    if( !id ) return;
    this.onDelete.emit( id );
  }
}
