import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public zapas:Array<string>;

  constructor() { 
        this.zapas=["Rebook","Adidas","Nike","Lecop"];
  }

  ngOnInit() {
  }

  darClik(){
    alert("Hla como estas!")
  }

}
