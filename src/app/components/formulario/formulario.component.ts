import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormularioModel } from 'src/app/config/Formulario.Model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
   
  
  datosform = [
    {nombre : "Afrocolombiano(a) / Negro(a) / Palenquero / Raizal" , value:"afrocolombiano"},
    {nombre : "Indígena" , value:"    indigena"},
    {nombre : " Otro" , value:" otro"},
   ]
 
   opcion = [
     {nombre : 'Si' ,value : 1  },
     {nombre : 'No' ,value : 0  }
   ]
   @Input()buttons:any = false
   @Input()texto:any = "btn"
  @Input()formu:any
  @Output()Eventos:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  
  }

   activo(dato:string){
     return this.formu.get(dato) 
    }
   datos(dato:string): any { 
  // console.log(  this.formu.get(dato) )
    if( this.formu.get(dato).invalid && this.formu.get(dato).touched){
      if( this.formu.get(dato).errors.required){
        return "el campo es obligatorio"
        }
      }

     }
  getError(element:string){
    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.pattern){
        return `el campor no es valido`
      }
        if( this.formu.get(element).errors.required){
          return "el campo es obligatorio"
        }
        if( this.formu.get(element).errors.email){
          return `requiere se un email `
        }
        if( this.formu.get(element).errors.minlength){
          return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
        }
        if( this.formu.get(element).errors.maxlength){
          return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
        }
        if( this.formu.get(element).errors.pattern){
          return `comprueba que un email es válido`
        }

    }
    return
  }
  getErrornumero(element:string){

    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.pattern){
        return `el campo no se permiten caracteres especiales`
      }

      if(this.formu.get(element).errors.min){
        return `el campo  se requiere un  mínimo  ${this.formu.get(element).errors.min.min}  `
      }
      if(this.formu.get(element).errors.max){
        return `el campo se requiere un máximo   ${this.formu.get(element).errors.max.max}  `
      }
      if( this.formu.get(element).errors.minlength){
        return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
      }
      if( this.formu.get(element).errors.maxlength){
        return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
      }

      if( this.formu.get(element).errors.required){
        return "el campo es obligatorio"
      }

    }
    return
  }
  send(){
    
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }
    const model = new FormularioModel(
      this.formu.get('nombre').value,
      this.formu.get('apellido').value,
      this.formu.get('idt').value,
      this.formu.get('cedula').value,
      this.formu.get('sexo').value,
      this.formu.get('edad').value,
      this.formu.get('grupoEtnico').value,
      this.formu.get('resguardo').value,
      this.formu.get('cabillo').value,
      this.formu.get('puebloindigena').value,
      this.formu.get('consejocomunitario').value,
      this.formu.get('orgAftocolombia').value,
      this.formu.get('otroPert').value,
      this.formu.get('direccion').value,
      this.formu.get('municipio').value,
      this.formu.get('telefono').value,
      this.formu.get('correo').value,
      this.formu.get('hogar').value,
      this.formu.get('proceso').value,
      this.formu.get('discapacidad').value,
      this.formu.get('nombreorganizacion').value,
      this.formu.get('cargorol').value,
      this.formu.get('firma').value,
      
    )

    this.buttons = true
      this.Eventos.emit(model)
  }

  
}
