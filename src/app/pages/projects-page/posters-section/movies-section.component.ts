import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.css'],
})
export class MoviesSectionComponent implements OnInit {
  constructor() {}

  @Input('moviesList') movies!: Movie[];
  posterClicked = false;

  ngOnInit(): void {}

   onPosterClicked(posterClicked: boolean) {
    this.posterClicked = posterClicked;
  }
}
