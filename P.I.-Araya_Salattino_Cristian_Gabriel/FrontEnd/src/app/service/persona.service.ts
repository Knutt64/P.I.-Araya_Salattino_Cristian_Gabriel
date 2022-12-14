import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendcgas.herokuapp.com/personas/';

  constructor(private http : HttpClient ) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
