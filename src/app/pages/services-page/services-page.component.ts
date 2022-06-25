import { Component, OnInit } from '@angular/core';
import { Service } from './service.model';


@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() { }

  services: Service[] = [
    {
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/coding.png",
      link: "#"
    },
    {
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/user-interface.png",
      link: "#"
    },
    {
      title: "Movie Poster",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/clapperboard.png",
      link: "#"
    },
    {
      title: "Graphic Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/design.png",
      link: "#"
    },
    {
      title: "Photo Editing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/edit-image.png",
      link: "#"
    },
    {
      title: "Video Editing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/film-editing.png",
      link: "#"
    },
    
  ]

  ngOnInit(): void {
  }

}
