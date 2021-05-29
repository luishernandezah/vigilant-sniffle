import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatudComponent } from './components/statud/statud.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { GuardaComponent } from './pages/guarda/guarda.component';
import { ListarComponent } from './pages/listar/listar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:'', component:PagesComponent, children:[
    {path:'', component:HomeComponent},
    {path:'guarda', component:GuardaComponent},
    {path:'listar', component:ListarComponent},
    {path:'actualizar/:id', component:ActualizarComponent},
    {path:'**', component:StatudComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
