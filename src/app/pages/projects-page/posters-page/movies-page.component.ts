import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/shared/MoviesList';

@Component({
  selector: 'app-posters-page',
  templateUrl: './posters-page.component.html',
  styleUrls: ['./posters-page.component.css']
})
export class PostersPageComponent implements OnInit {

  constructor() { }

  movies = MOVIES;

  ngOnInit(): void {
  }

}
