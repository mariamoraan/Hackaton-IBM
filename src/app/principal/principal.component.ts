import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  public activities = [
    {'name': "DEPORTES", 'img': "../../assets/stock/deporte1.jpg", 'link':null, 'router':'/sports'},
    {'name': "ASOCIACIONES", 'img': "../../assets/stock/asociacion.jpeg", 'link':null, 'router':'/asociations'},
    {'name': "NEWSLETTER", 'img': "../../assets/stock/newsletter.jpeg", 'link':"https://newsletter.uc3m.es/", 'router':null},
    {'name': "RESERVAS", 'img': "../../assets/stock/reserva.jpeg", 'link':"https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-de&integrationID=14162173-7ea5-4914-aa27-8b5a767ca58c&serviceInstanceID=15647c8e-0203-4f2b-9c9d-64c19c3e802d", 'router':null},
    {'name': "HORARIO", 'img': "../../assets/stock/horario.jpeg", 'link':"https://login.uc3m.es/index.php/CAS/login?service=https%3A%2F%2Faplicaciones.uc3m.es%2Fhorarios-web%2Fsso%2Fcasback", 'router':null},
    {'name': "FAQ", 'img': "../../assets/stock/FAQ.jpeg", 'link':"", 'router':null},
    {'name': "AYUDA", 'img': "../../assets/stock/watson.png", 'link':"https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-de&integrationID=d210bfea-d8d7-471e-b49e-4b2cf3305445&serviceInstanceID=7c3110f2-ff94-44ea-9dbf-88fcc5ef9955", 'router':null},
  ];

  ngOnInit(): void {
  }

}
