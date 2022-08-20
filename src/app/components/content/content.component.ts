import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';

import { RxjsService } from '../../services/rxjs.service';


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
export class ContentComponent {
 
  notas: any = [];


  dataSource:MatTableDataSource<any> = new MatTableDataSource<Curso>();

  columnas: string[] = ['asignatura','primerCertamen','segundoCertamen','tercerCertamen','resultado'];
  
  dataSource$: Observable<MatTableDataSource<Curso>> =
  this.rxjsService.obtenerNotas().pipe(
    map((things) => {
      const dataSource = this.dataSource;
      dataSource.data = things
      return dataSource;
    })
  )
 
 //@Input() notas: Array<any> =[];

  
  constructor(
    private rxjsService: RxjsService
  ) { }


}
