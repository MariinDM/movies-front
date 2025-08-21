import { Component, inject } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { HomeService } from '../../services/home-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  private service = inject(HomeService);
  protected movies = this.service.moviesSignal;

}
