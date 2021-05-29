import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatosqueryService } from 'src/app/services/datosquery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  formu!:FormGroup
  constructor(private fb:FormBuilder ,private _urlparam:ActivatedRoute,private service:DatosqueryService) {
    this.formu = this.fb.group({

     
      nombre:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      apellido:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      idt:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]] ,
      cedula:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]] ,
      sexo:['',[Validators.required]] ,
      edad:[null,[Validators.required,Validators.min(1),Validators.max(3),Validators.pattern("^[-+]?[0-9]+$")]] ,
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
      nombreorganizacion:['',[Validators.required, Validators.minLength(4)]] ,
      cargorol:['',[Validators.required]] ,
      puebloindigena:['',[Validators.required, Validators.minLength(4)]] ,
      firma:['',[Validators.required, Validators.minLength(3)]] ,
      
    })
   }

  ngOnInit(): void {
    this.service.getId(this._urlparam.snapshot.params.id).subscribe(data=>
      {
      
        for (const key of data) {
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
      }

      )

  }
  actualizar(dato:any){
      this.service.actualizar(dato,this._urlparam.snapshot.params.id).subscribe((data:any)=>{
        if(data.datos){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.Mensaje,
            showConfirmButton: false,
            timer: 1500
          })
        }}
        )
  }
}
