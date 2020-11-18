import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor() { }

  public sports = [
    {
      'name':'NATACIÓN', 
      'img':"../../assets/stock/deporte1.jpg", 
      'description':'Al agua patos! En Leganés y Getafe', 
      'link': ''
    },
    {
      'name':'CICLISMO', 
      'img':"../../assets/stock/bicicleta.jpeg", 
      'description':'Rutas todos los fines de semana', 
      'link': ''
    },
    {
      'name':'RUNNING', 
      'img':"../../assets/stock/running.jpeg", 
      'description':'A correr se ha dicho ! Preparamos maratones', 
      'link': ''
    },
    {
      'name':'TENIS', 
      'img':"../../assets/stock/tenis.jpeg", 
      'description':'Nadal, Federer y los cracks de la UC3M', 
      'link': ''
    },
  ]

  ngOnInit(): void {
  }

}
