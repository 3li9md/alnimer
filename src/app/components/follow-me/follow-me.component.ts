import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/shared/models/socialMedia.model';


@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {

  constructor() { }

  socials: SocialMedia[] = [
    {
      id: 1,
      name: "Instagram",
      image: "assets/images/icons/instagram.png",
      link: "https://www.instagram.com/bin9md",
    },
    {
      id: 2,
      name: "Deviantart",
      image: "assets/images/icons/deviantart.png",
      link: "https://www.deviantart.com/3li9md",
    },
    {
      id: 3,
      name: "Behance",
      image: "assets/images/icons/behance.png",
      link: "https://www.behance.net/3li9md"
    },
    {
      id: 4,
      name: "Linkedin",
      image: "assets/images/icons/linkedin.png",
      link: "https://www.linkedin.com/in/ali-alnimer/"
    }
  ]

  ngOnInit(): void {
  }

}
