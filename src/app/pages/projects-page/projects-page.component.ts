import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/shared/MoviesList';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  public movies = MOVIES;




  ngOnInit(): void {
  }

}
