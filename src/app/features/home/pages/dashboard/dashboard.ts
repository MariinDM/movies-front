import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Movie } from '../../interfaces/movie';
import { HomeService } from '../../services/home-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  private destroyRef = inject(DestroyRef);
  private service = inject(HomeService);
  protected movies: Movie[] = [];
  protected filteredMovies: Movie[] = [];

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.service.getPopularMovies().pipe(
      map((response: any) =>
        response.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          img: `https://image.tmdb.org/t/p/original${movie.poster_path}`
        }))
      ),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies;
        this.filteredMovies = movies;
      }
    });
  }

  filterMovies(query: string) {
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
