import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    HeroComponent,
    WorkComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
