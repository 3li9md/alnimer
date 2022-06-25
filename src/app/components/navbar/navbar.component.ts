import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input('pageRoutes') routes: Routes = [];

  ngOnInit(): void {
  }

}
