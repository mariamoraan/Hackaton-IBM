import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asociations',
  templateUrl: './asociations.component.html',
  styleUrls: ['./asociations.component.scss']
})
export class AsociationsComponent implements OnInit {

  constructor() { }

  public asociations = [
    {
      'name':'ESCALADA', 
      'img':"../../assets/stock/escalada.jpeg", 
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
    {
      'name':'AJEDREZ UC3M', 
      'img':"../../assets/stock/ajedrez.jpeg", 
      'description':'Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum Loreipsum', 
      'link': ''
    },
  ]
  ngOnInit(): void {
  }

}
