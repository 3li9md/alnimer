import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/shared/MoviesList';
import { Movie } from '../../posters-section/movie.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-inner-movie-page',
  templateUrl: './inner-movie-page.component.html',
  styleUrls: ['./inner-movie-page.component.css']
})
export class InnerMoviePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  movie!: Movie;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // takes the passed id from the poster and builds the page content upon it
        this.movie = MOVIES[params['id']-1];
      }
    )
  }

}
