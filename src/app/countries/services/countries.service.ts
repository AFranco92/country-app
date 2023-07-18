import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null ),
      catchError( () => of(null) )
    );
  }

  searchCapital( term: string, query: string ): Observable<Country[]> {
    return this.search(term, query);
  }

  searchCountry( term: string, query: string ): Observable<Country[]> {
    return this.search(term, query);
  }

  searchRegion( term: string, query: string ): Observable<Country[]> {
    return this.search(term, query);
  }

  private search( term: string, query: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${query}/${term}`)
    .pipe(
      catchError( () => of([]) )
    );
  }
  
}