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

  getPaisDetalle( id: string ): Observable<Country>{
    const url = `${this.endpoint}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarCapital( capital: string): Observable<Country[]>{
    const url = `${this.endpoint}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion( region: string): Observable<Country[]>{
    const url = `${this.endpoint}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
