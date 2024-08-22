import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
//aqui podemos crear variables, constantes, listas, arreglos
//crear variable = nombre: tipo_dato = valor;
titulo: string = "PÁGINA DE LOGIN";
numero: number = 5;
decimal:number= 2.5;
existe: boolean= true;
fecha_hoy: Date = new Date();
nombres: string[]=["Pedro", "Juan", "Diego"];
persona: any=  { "nombre" : "Jeison", "edad":5};

email:string ="miau@gmail.com";
  constructor() { }

  ngOnInit() {
  }

}
