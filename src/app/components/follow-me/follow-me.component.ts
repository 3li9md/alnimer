import { Component, OnInit } from '@angular/core';
export interface SocialMedia {
  name: string,
  image: string,
  link: string
}

@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {

  constructor() { }

  socials: SocialMedia[] = [
    {
      name: "Instagram",
      image: "assets/images/icons/instagram.png",
      link: "https://www.instagram.com/bin9md",
    },
    {
      name: "Deviantart",
      image: "assets/images/icons/deviantart.png",
      link: "https://www.deviantart.com/3li9md",
    },
    {
      name: "Behance",
      image: "assets/images/icons/behance.png",
      link: "https://www.behance.net/3li9md"
    },
    {
      name: "Linkedin",
      image: "assets/images/icons/linkedin.png",
      link: "https://www.linkedin.com/in/ali-alnimer/"
    }
  ]

  ngOnInit(): void {
  }

}
