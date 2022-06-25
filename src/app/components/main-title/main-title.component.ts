import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent implements OnInit {

  constructor() { }

  @Input() title = "Title";
  @Input() text = "Here is the text";

  ngOnInit(): void {
  }

}
