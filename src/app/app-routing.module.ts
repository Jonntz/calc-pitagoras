import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HipotenusaComponent } from './custom-components/hipotenusa/hipotenusa.component';
import { IndexBodyComponent } from './custom-components/index-body/index-body.component';
import { SobreBodyComponent } from './custom-components/sobre-body/sobre-body.component';
import { TeoremaBodyComponent } from './custom-components/teorema-body/teorema-body.component';
import { TeoremaFormCatetoAdjascenteComponent } from './custom-components/teorema-form-cateto-adjascente/teorema-form-cateto-adjascente.component';
import { TeoremaFormComponent } from './custom-components/teorema-form/teorema-form.component';

const routes: Routes = [
  {path:'', component:IndexBodyComponent},
  {path:'teorema', component:TeoremaBodyComponent, children: [
    {path: 'cateto-oposto', component:TeoremaFormComponent},
    {path: 'cateto-adjascente', component:TeoremaFormCatetoAdjascenteComponent},
    {path: 'hipotenusa', component:HipotenusaComponent}
  ]},
  {path:'sobre', component:SobreBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
