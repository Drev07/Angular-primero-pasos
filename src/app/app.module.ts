import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';


import { AppComponent } from './app.component';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    heroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
