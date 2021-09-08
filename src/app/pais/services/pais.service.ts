import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endpoint = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais( name: string): Observable<Country[]>{
    const url = `${this.endpoint}/name/${name}`;
    return this.http.get<Country[]>(url);
  }
}
