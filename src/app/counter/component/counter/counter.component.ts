import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>{{ counter }}</h3>
<button (click)="increasBtr(+1)"> +1</button>
<button (click)="resetBtr(10)">Reset</button>
<button (click)="increasBtr(-1)"> -1</button>

 `

})

export class CounterComponent {
  public counter: number = 10;

  increasBtr(value: number): void {
    this.counter += value;


  }

  resetBtr(value: number): void {
    this.counter = value;

  }

  // constructor() { }


}
