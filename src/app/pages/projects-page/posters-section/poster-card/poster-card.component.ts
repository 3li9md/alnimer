import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../poster.model';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.css']
})
export class PosterCardComponent implements OnInit {

  constructor() { }
  @Input() poster: any;

  ngOnInit(): void {
  }

}
