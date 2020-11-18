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
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
    {
      'name':'CICLISMO', 
      'img':"../../assets/stock/bicicleta.jpeg", 
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
    {
      'name':'RUNNING', 
      'img':"../../assets/stock/running.jpeg", 
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
    {
      'name':'TENIS', 
      'img':"../../assets/stock/tenis.jpeg", 
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
  ]

  ngOnInit(): void {
  }

}
