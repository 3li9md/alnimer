import { Component, HostListener, OnInit } from '@angular/core';
import { Poster } from './poster.model';

@Component({
  selector: 'app-posters-section',
  templateUrl: './posters-section.component.html',
  styleUrls: ['./posters-section.component.css'],
})
export class PostersSectionComponent implements OnInit {
  constructor() {}

  posters: Poster[] = [
    {
      title: 'Memory of Tomorrow',
      text: 'lorem',
      img: 'assets/images/posters/memory.jpg',
    },
    {
      title: 'Faces on the Table',
      text: 'lorem',
      img: 'assets/images/posters/faces.jpg',
    },
    {
      title: 'Into the Silence',
      text: 'lorem',
      img: 'assets/images/posters/silence.jpg',
    },
  ];

  posterClicked = false;

  ngOnInit(): void {}

   onPosterClicked(posterClicked: boolean) {
    this.posterClicked = posterClicked;
  }
}
