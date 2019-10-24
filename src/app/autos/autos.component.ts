import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

    public marcas:Array<string>;
    public letra:string;


  constructor() { 
      this.marcas=["fiat","honda","ferrari","astonMartin","lamborginni"]; 
      this.letra="hola";
  }

  ngOnInit() {
  }

  cambiarLetra(){
        this.letra="bienvenidos!!";
  }

}
