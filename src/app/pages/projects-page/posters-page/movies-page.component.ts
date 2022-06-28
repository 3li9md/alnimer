import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/shared/MoviesList';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor() { }

  movies = MOVIES;

  ngOnInit(): void {
  }

}
