import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import dataColegio from 'src/app/data.json'

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
private observableNotas: Observable<any>;
key: number=83;
//key es el id que referencia al alumno, debiera ingresarse cuando se incia sesion el alumno.
nombres: any[] = dataColegio.alumnos;
    constructor() { 
              this.observableNotas = new Observable<any>((suscriptor) =>{
              suscriptor.next(dataColegio.alumnos.filter(obj => {
                return obj.id === this.key
              })[0].notas)
      })
    }

  obtenerNotas(){
    return this.observableNotas;
  }
}
