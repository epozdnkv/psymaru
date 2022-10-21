import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
        AppComponent,
    MyMenuComponent,
    HeroComponent,
    WorkComponent,
    AboutComponent,
    PriceComponent,
    CardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
