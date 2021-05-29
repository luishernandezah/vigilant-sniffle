import { Component, OnInit } from '@angular/core';
import { DatosqueryService } from 'src/app/services/datosquery.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  datos:any
  activo:boolean = false
  constructor(private service:DatosqueryService) { }

  ngOnInit(): void {
    this.service.GetForm().subscribe(datos=>{
      this.datos = datos
      this.activo = true
    } )
  }

}
