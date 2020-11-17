import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  public activities = [
    {'name': "DEPORTES", 'img': "../../assets/stock/deporte1.jpg", 'link':""},
    {'name': "ASOCIACIONES", 'img': "../../assets/stock/asociacion.jpeg", 'link':""},
    {'name': "NEWSLETTER", 'img': "../../assets/stock/newsletter.jpeg", 'link':""},
    {'name': "RESERVAS", 'img': "../../assets/stock/reserva.jpeg", 'link':""},
    {'name': "HORARIO", 'img': "../../assets/stock/horario.jpeg", 'link':""},
    {'name': "FAQ", 'img': "../../assets/stock/FAQ.jpeg", 'link':""},
    {'name': "AYUDA", 'img': "../../assets/stock/watson.png", 'link':""},
  ];

  ngOnInit(): void {
  }

}
