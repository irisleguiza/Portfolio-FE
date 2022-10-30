import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  http: any;

  constructor() { }
  obtenerDatos():Observable<any>{
    return this.http.get("json");

  }
}
