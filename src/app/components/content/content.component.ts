import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  listaEstudiantes: Array<any> =[
    {asignatura:'Quimica',primerCertamen:2,segundoCertamen:2,tercerCertamen:3},
    {asignatura:'Fisica',primerCertamen:5,segundoCertamen:3,tercerCertamen:7},
    {asignatura:'Matematica',primerCertamen:4,segundoCertamen:3,tercerCertamen:8},
    {asignatura:'Musica',primerCertamen:1,segundoCertamen:9,tercerCertamen:10},
    {asignatura:'Lenguaje',primerCertamen:5,segundoCertamen:6,tercerCertamen:7},
  ]

 //@Input() notas: Array<any> =[];

  
  constructor() { }

  ngOnInit(): void {
  }

}

/*

*/
