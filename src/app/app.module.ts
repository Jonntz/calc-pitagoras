import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { IndexBodyComponent } from './custom-components/index-body/index-body.component';
import { FooterComponent } from './custom-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
