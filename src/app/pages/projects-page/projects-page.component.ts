import { Component, OnInit } from '@angular/core';
import { Poster } from './posters-section/poster.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  posters: Poster[] = [
    {
      title: 'Memory of Tomorrow',
      text: 'lorem',
      img: 'assets/images/posters/memory.jpg',
      genre: 'Thriller'
    },
    {
      title: 'Faces on the Table',
      text: 'lorem',
      img: 'assets/images/posters/faces.jpg',
      genre: 'Drama'
    },
    {
      title: 'Into the Silence',
      text: 'lorem',
      img: 'assets/images/posters/silence.jpg',
      genre: 'Sci-fi'
    },
    {
      title: 'Anomalies',
      text: 'lorem',
      img: 'assets/images/posters/anomalies.jpg',
      genre: 'Sci-fi'
    },
    {
      title: 'Building 23',
      text: 'lorem',
      img: 'assets/images/posters/building23.jpg',
      genre: 'Adventure'
    },
    {
      title: 'I Need Your Forgivness',
      text: 'lorem',
      img: 'assets/images/posters/forgivness.jpg',
      genre: 'Drama'
    },
    {
      title: 'Rhapsody of Things',
      text: 'lorem',
      img: 'assets/images/posters/rhapsody.jpg',
      genre: 'Poetic'
    },
    {
      title: 'Eradication',
      text: 'lorem',
      img: 'assets/images/posters/eradication.jpg',
      genre: 'Thriller'
    },
  ];




  ngOnInit(): void {
  }

}
