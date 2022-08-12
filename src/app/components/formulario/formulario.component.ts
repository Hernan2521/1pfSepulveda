import { Component, Input,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  listaEstudiantes: Array<any> =[
    {asignatura:'Quimica',primerCertamen:2,segundoCertamen:2,tercerCertamen:3},
    {asignatura:'Fisica',primerCertamen:5,segundoCertamen:3,tercerCertamen:7},
    {asignatura:'Matematica',primerCertamen:4,segundoCertamen:3,tercerCertamen:8},
    {asignatura:'Musica',primerCertamen:1,segundoCertamen:9,tercerCertamen:10},
    {asignatura:'Lenguaje',primerCertamen:5,segundoCertamen:6,tercerCertamen:7},
  ]
  //@Input() notas: Array<any> =[];
  formulario: FormGroup = new FormGroup({
    asignatura: new FormControl(''),
    mensaje: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
