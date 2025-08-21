import { Injectable, signal } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private privateMoviesSignal = signal<Movie[] | null>(null);
  moviesSignal = this.privateMoviesSignal.asReadonly();

  constructor() {
    this.fetchMovies();
  }

  async fetchMovies(): Promise<Movie[]> {
    await this.delay(1000);

    const movies: Movie[] = [
      { title: 'Como entrenar a tu dragón', img: '/list-movies/como-entrenar-a-tu-dragon.webp' },
      { title: 'Elio', img: '/list-movies/elio.webp' },
      { title: 'Jurassic World: Renace', img: '/list-movies/jurassic-world-renace.webp' },
      { title: 'La Guerra de los Mundos', img: '/list-movies/la-guerra-de-los-mundos.webp' },
      { title: 'La Hora de la Desaparición', img: '/list-movies/la-hora-de-la-desaparicion.webp' },
      { title: 'Lilo y Stitch', img: '/list-movies/lilo-y-stitch.webp' },
      { title: 'Los 4 Fantásticos', img: '/list-movies/los-4-fantasticos.webp' },
      { title: 'Misión Imposible: Sentencia Final', img: '/list-movies/mision-imposible-sentencia-final.webp' },
      { title: 'Los Pitufos', img: '/list-movies/pitufos.webp' },
      { title: 'Rescate Impactante', img: '/list-movies/rescate-impactante.webp' },
      { title: 'Robin', img: '/list-movies/robin.webp' },
      { title: 'Spider-Man: A Través del Spider-Verso', img: '/list-movies/spiderman-a-atraves-del-spiderverso.webp' },
      { title: 'Spider-Man: La Amenaza de Electro', img: '/list-movies/spiderman-2-la-amenaza-de-electro.webp' },
      { title: 'Spider-Man: De Regreso a Casa', img: '/list-movies/spiderman-de-regreso-a-casa.webp' },
      { title: 'Spider-Man: Sin Camino a Casa', img: '/list-movies/spiderman-sin-camino-a-casa.webp' },
      { title: 'Spider-Man', img: '/list-movies/spiderman.webp' },
      { title: 'Superman', img: '/list-movies/superman.webp' }
    ];

    this.privateMoviesSignal.set(movies);
    return movies;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
