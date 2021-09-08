import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endpoint = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais( name: string): Observable<any>{
    const url = `${this.endpoint}/name/${name}`;
    return this.http.get(url);
  }
}
