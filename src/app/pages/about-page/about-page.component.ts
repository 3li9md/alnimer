import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  info: { title: string, icon: string, text: string }[] = [
    {
      title: "Born and Raised",
      icon: "assets/images/icons/user.png",
      text: "Ali Alnimer, born & raised in Dammam, Saudi Arabia, Jan 1999."
    },
    {
      title: "Education",
      icon: "assets/images/icons/mortarboard.png",
      text: "Bachelor of Science Degree in Software Engineering from King Fahd University of Petroleum & Minerals in Dhahran, Saudi Arabia, Jan 2023."
    },
    {
      title: "Career Path",
      icon: "assets/images/icons/route.png",
      text: " My elder enthusiasm for Graphic Design slipped me into this field of study, specifically by starting to explore UI & UX Design principles. "
    },
    {
      title: "sth else",
      icon: "assets/images/icons/clapperboard.png",
      text: "Lorem and his siblings"
    },
  ]

  ngOnInit(): void {
  }

}
