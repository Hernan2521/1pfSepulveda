import { Component, Input, OnInit } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import dataColegio from 'src/app/data.json'

export interface Curso{
  asignatura: number;
  primerCertamen: number;
  segundoCertamen: number;
  tercerCertamen: number;
  resultado:boolean;
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  columnas = ['asignatura','primerCertamen','segundoCertamen','tercerCertamen','resultado'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource(dataColegio.alumnos[0].notas);



 //@Input() notas: Array<any> =[];

  
  constructor() { }

  ngOnInit(): void {
  }

}

/*

*/
