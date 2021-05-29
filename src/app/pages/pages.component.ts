import { Component, OnInit } from '@angular/core';
import { DatosqueryService } from './../services/datosquery.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private services :DatosqueryService) {
    
   }


  ngOnInit(): void {

    
  }

  evento(){

  }

}
