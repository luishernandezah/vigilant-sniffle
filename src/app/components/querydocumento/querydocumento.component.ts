import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-querydocumento',
  templateUrl: './querydocumento.component.html',
  styleUrls: ['./querydocumento.component.scss']
})
export class QuerydocumentoComponent implements OnInit {
  consulta = ""
  @Output()Eventos:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  consultar(forma: NgForm){
    this.Eventos.emit(this.consulta)
  }
}
