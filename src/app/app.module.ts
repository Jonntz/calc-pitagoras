import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { IndexBodyComponent } from './custom-components/index-body/index-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
