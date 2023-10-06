import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  API = ' http://localhost:3000/eventos';

  listar() {
    return this.http.get(this.API)
  }

  listarDetalhes(id:number) {
    const url = `${this.API}/${id}`
    return this.http.get(url)
  }
}
