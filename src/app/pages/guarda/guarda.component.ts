import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioModelInter } from 'src/app/config/Formulario.Model';
import Swal from 'sweetalert2';
import { DatosqueryService } from './../../services/datosquery.service';

@Component({
  selector: 'app-guarda',
  templateUrl: './guarda.component.html',
  styleUrls: ['./guarda.component.scss']
})
export class GuardaComponent implements OnInit {
  buttons = false 
  formu!:FormGroup
  messaje:Boolean = false
  constructor(private fb:FormBuilder ,private service:DatosqueryService) { }

  ngOnInit(): void {
    this.formu = this.fb.group({

      nombre:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      apellido:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      idt:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      cedula:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]] ,
      sexo:['',[Validators.required]] ,
      edad:[null,[Validators.required,Validators.min(0),Validators.max(100),Validators.pattern("^[-+]?[0-9]+$")]] ,
      grupoEtnico:['',[Validators.required]] ,    
      resguardo: this.fb.group({
        activo: [''],
        datos: ['']
      }),
      cabillo: this.fb.group({   
        activo: [''],
        datos: [''] 
      }),
      consejocomunitario : this.fb.group({   
        activo: [''],
        datos: ['',] 
      }), 
      orgAftocolombia: this.fb.group({   
        activo: [''],
        datos: [''] 
      }), 
      otroPert:['',[Validators.required,Validators.minLength(3)]] ,
      direccion:['',[Validators.required,Validators.minLength(3)]] ,
      municipio:['',[Validators.required,Validators.minLength(3)]] ,
      telefono:[null,[Validators.min(1000000),Validators.max(999999999999999999),Validators.pattern("^[-+]?[0-9]+$") ]] ,
      correo:['',[Validators.required, Validators.minLength(4),Validators.email,Validators.maxLength(30),Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]] ,
      hogar:this.fb.group({   
        activo: [''],
        datos: [''] 
      }), 

      proceso:this.fb.group({   
        activo: [''],
        datos: [''] 
      }),  
   
      discapacidad:['',[Validators.required]] ,
      nombreorganizacion:['',[Validators.required]] ,
      cargorol:['',[Validators.required]] ,
      puebloindigena:['',[Validators.required]] ,
      firma:['',[Validators.required]] ,
      
    })
  }

  consulta(datos:any){
 
     this.service.getDocument(datos).subscribe(datos=>    {
     
     
      for (const key of datos) {
        this.formu.patchValue({
          nombre: key.nombre ,
          apellido: key.apellido ,
          idt: key.idt ,
          cedula:key.cedula ,
          sexo:key.sexo  ,
          edad:key.edad ,
          grupoEtnico:key.grupoEtnico ,    
          resguardo: {
            activo: key.resguardo.activo,
            datos: key.resguardo.datos
          },
          cabillo: {   
            activo:  key.cabillo.activo,
            datos:  key.cabillo.datos,
          },
          consejocomunitario : {   
            activo:  key.consejocomunitario.activo,
            datos:  key.consejocomunitario.datos,
          }, 
          orgAftocolombia: {   
            activo:  key.orgAftocolombia.activo,
            datos:  key.orgAftocolombia.datos,
          }, 
          otroPert:key.otroPert ,
          direccion: key.direccion,
          municipio:key.municipio, 
          telefono: key.telefono,
          correo: key.correo,
          hogar:{   
            activo:  key.hogar.activo,
            datos:  key.hogar.datos,
          }, 
    
          proceso:{   
            activo:  key.proceso.activo,
            datos:  key.proceso.datos,
          },  
          discapacidad:key.discapacidad,
          nombreorganizacion:key.nombreorganizacion ,
          cargorol:key.cargorol  ,
          puebloindigena: key.puebloindigena,
          firma: key.firma
        })
      }
    if(datos.length<1){
      this.messaje = true
      setTimeout(()=>{
       
        this.messaje = false
      },3000)
    }
    this.buttons = true 
  }
    )
   
  }

  guarda(datos:FormularioModelInter){
    this.service.postSend(datos).subscribe((data:any)=>{
      if(data.datos){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.Mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
      this.buttons = true 
    })
    this.buttons = true 
  }
}
