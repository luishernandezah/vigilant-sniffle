import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { GuardaComponent } from './guarda/guarda.component';
import { SharedModule } from '../shared/shared.module';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ListarComponent } from './listar/listar.component';
import { ListarcomponentComponent } from '../components/listarcomponent/listarcomponent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SeachPipe } from '../pipes/seach.pipe';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { RouterModule } from '@angular/router';
import { QuerydocumentoComponent } from '../components/querydocumento/querydocumento.component';
import { StatudComponent } from '../components/statud/statud.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorsInterceptor } from '../interceptor/interceptors.interceptor';
@NgModule({
  declarations: [
    PagesComponent,
    GuardaComponent,
    FormularioComponent,
    ListarComponent,
    ListarcomponentComponent,
    SeachPipe,
    ActualizarComponent,
    QuerydocumentoComponent,
    StatudComponent
  ],
  imports: [

  SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PagesComponent,
    GuardaComponent
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsInterceptor,
    multi: true
  }
]
})
export class PagesModule { }
