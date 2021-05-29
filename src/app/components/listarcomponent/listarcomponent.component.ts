import { Component, Input, OnInit } from '@angular/core';
import { DatosqueryService } from 'src/app/services/datosquery.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listarcomponent',
  templateUrl: './listarcomponent.component.html',
  styleUrls: ['./listarcomponent.component.scss']
})
export class ListarcomponentComponent implements OnInit {
  @Input()datos:any
  p: number = 1;
  inputfilter = ""
  itempages:number = 5
  pagination:any = []

  constructor(private services:DatosqueryService) { }

  ngOnInit(): void {
    let orde = [2, 4,this.itempages ,6,10 ,Math.round( this.datos.length/4),Math.round(this.datos.length/3),Math.round(this.datos.length/2),this.datos.length]
    this.pagination =  orde.sort((a,b)=>a-b).filter((el,index)=>orde.indexOf(el)==index).filter((el)=>el>1)
  }

  delet(item:any){
    Swal .fire({
      title: 'Desea Eliminar?',
      text: `Desea Eliminar Ester usuario  ${item.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.eliminar(item.id).subscribe((data:any)=>{
          if(data.datos){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: data.Mensaje,
              showConfirmButton: false,
              timer: 1500
            })
          }
        
        this.services.GetForm().subscribe(data=>this.datos =data)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
      })
    }
  })
 
  }
}
