import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { IndexBodyComponent } from './custom-components/index-body/index-body.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { TeoremaBodyComponent } from './custom-components/teorema-body/teorema-body.component';
import { SobreBodyComponent } from './custom-components/sobre-body/sobre-body.component';
import { TeoremaFormComponent } from './custom-components/teorema-form/teorema-form.component';
import { TeoremaFormCatetoAdjascenteComponent } from './custom-components/teorema-form-cateto-adjascente/teorema-form-cateto-adjascente.component';
import { HipotenusaComponent } from './custom-components/hipotenusa/hipotenusa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexBodyComponent,
    FooterComponent,
    TeoremaBodyComponent,
    SobreBodyComponent,
    TeoremaFormComponent,
    TeoremaFormCatetoAdjascenteComponent,
    HipotenusaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
