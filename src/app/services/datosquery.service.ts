import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FormularioModelInter } from '../config/Formulario.Model';


@Injectable({
  providedIn: 'root'
})
export class DatosqueryService {

  constructor(private http:HttpClient) { }

  postSend(datos:FormularioModelInter){

    return this.http.post(`${environment.apiUrl}formulario`,datos)
  }

  GetForm(){
    return this.http.get(`${environment.apiUrl}formulario`)
      .pipe(map((data:any)=>this.filtadatos(data)
    ))
  }

  getId(datos:any){

    return this.http.get(`${environment.apiUrl}formulario/${datos}`)
      .pipe(map((data:any)=>this.filtadatos(data)))
  }

  actualizar(datos:FormularioModelInter,id:any){
    return this.http.put(`${environment.apiUrl}formulario/${id}`,datos)
  }

  getDocument(documen:any){
  
    return this.http.get(`${environment.apiUrl}formulario/query/${documen}`)
    .pipe(map((data:any)=>this.filtadatos(data)))
  }

  eliminar(id:any){
    return this.http.delete(`${environment.apiUrl}formulario/${id}`)
  }
  private filtadatos(data:any){

    return  data.map((data:any)=>{
      return {
        id:data.id,
        nombre: data.nombre,
        apellido: data.apellido,
        idt: data.idt,
        cedula: data.cedula,
        sexo: data.sexo,
        edad:data.edad,
        grupoEtnico: data.grupoEtnico,
        resguardo: JSON.parse(data.resguardo),
        cabillo: JSON.parse(data.cabillo),
        consejocomunitario: JSON.parse(data.consejocomunitario),
        orgAftocolombia:  JSON.parse(data.orgAftocolombia),
        otroPert:  JSON.parse(data.otroPert),
        direccion: data.direccion,
        municipio: data.municipio,
        telefono: data.telefono,
        correo: data.correo,
        hogar: JSON.parse(data.hogar),
        proceso: JSON.parse(data.proceso),
        discapacidad: data.discapacidad,
        nombreorganizacion: data.nombreorganizacion,
        cargorol: data.cargorol,
        puebloindigena:data.puebloindigena,
        firma: data.firma,
     
      }
    })  
  }


}
