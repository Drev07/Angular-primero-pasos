import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'iroman';
  public age:   number = 45;


  get capitalizeName(): string {
    return 'Hola mundo'.toUpperCase();
  }




  getHeroDescription(): string {

    return `${ this.name } - ${this.age}`;
  }


  changeHero():void {

    this.name = 'spiderman';

  }
  changeAge(): void{

    this.age = 25;

  }
  resetForm(): void{
    // this.name = 'iroman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {

    //   element.innerHTML = '<h1>Hola desde Angular</h1>';
    // });
  }
}
