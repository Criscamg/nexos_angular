import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MercanciaDto } from '../modelos/mercancia-dto';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {
  private base : String;

  constructor(private http: HttpClient) {
    this.base = 'http://localhost:8080';
   }

  obtenerMercancias(): Observable<MercanciaDto[]>{
    return this.http.get<MercanciaDto[]>(``+this.base+`/mercancia/consultar`);
  }
}
