import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponenet } from './pages/main-pages.componenet';
import { FormsModule } from '@angular/forms';

import { ListDbzComponent } from './component/list-dbz/list-dbz.component';
import { AddCharacterDbzComponent } from './component/add-character-dbz/add-character-dbz.component';



@NgModule({
  declarations: [
    MainPageComponenet,
    ListDbzComponent,
    AddCharacterDbzComponent
  ],
  exports: [
    MainPageComponenet
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
