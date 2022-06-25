import { Component, OnInit } from '@angular/core';
import { Poster } from './poster.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  posters: Poster[] = [
    {
      title: "Memory of Tomorrow",
      text: "lorem",
      img: "assets/images/posters/memory.jpg"
    },
    {
      title: "Faces on the Table",
      text: "lorem",
      img: "assets/images/posters/faces.jpg"
    },
    {
      title: "Into the Silence",
      text: "lorem",
      img: "assets/images/posters/silence.jpg"
    }
  ]


  ngOnInit(): void {
  }

}
