import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-posters-section',
  templateUrl: './posters-section.component.html',
  styleUrls: ['./posters-section.component.css'],
})
export class PostersSectionComponent implements OnInit {
  constructor() {}

  @Input('postersList') movies!: Movie[];
  posterClicked = false;

  ngOnInit(): void {}

   onPosterClicked(posterClicked: boolean) {
    this.posterClicked = posterClicked;
  }
}
