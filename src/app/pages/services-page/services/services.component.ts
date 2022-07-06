import { Component, OnInit } from '@angular/core';
import { Service } from '../../../shared/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/coding.png",
      link: "#"
    },
    {
      id: 2,
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/user-interface.png",
      link: "#"
    },
    {
      id: 3,
      title: "Movie Poster",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/clapperboard.png",
      link: "#"
    },
    {
      id: 4,
      title: "Graphic Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/design.png",
      link: "#"
    },
    {
      id: 5,
      title: "Photo Editing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/edit-image.png",
      link: "#"
    },
    {
      id: 6,
      title: "Video Editing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "assets/images/icons/film-editing.png",
      link: "#"
    },
    
  ]

  ngOnInit(): void {
  }

}
