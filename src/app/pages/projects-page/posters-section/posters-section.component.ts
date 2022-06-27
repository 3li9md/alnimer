import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Poster } from './poster.model';

@Component({
  selector: 'app-posters-section',
  templateUrl: './posters-section.component.html',
  styleUrls: ['./posters-section.component.css'],
})
export class PostersSectionComponent implements OnInit {
  constructor() {}

  @Input('postersList') posters!: Poster[];
  posterClicked = false;

  ngOnInit(): void {}

   onPosterClicked(posterClicked: boolean) {
    this.posterClicked = posterClicked;
  }
}
