import { inject, Injectable, signal } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getPopularMovies(page: number): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/popular?language=es-MX&page=${page}`;
    return this.http.get<Movie[]>(url);
  }

}
