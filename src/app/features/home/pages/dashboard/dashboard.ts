import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Movie } from '../../interfaces/movie';
import { HomeService } from '../../services/home-service';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  page: number = 1;

  private destroyRef = inject(DestroyRef);
  private service = inject(HomeService);
  private readonly imageUrl = environment.imageUrl;
  protected movies: Movie[] = [];
  protected filteredMovies: Movie[] = [];

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(page: number = 1) {
    this.service.getPopularMovies(page).pipe(
      map((response: any) =>
        response.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          img: `${this.imageUrl}${movie.poster_path}`
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

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getPopularMovies(this.page);
    }
  }

  nextPage() {
    this.page++;
    this.getPopularMovies(this.page);
  }
}
