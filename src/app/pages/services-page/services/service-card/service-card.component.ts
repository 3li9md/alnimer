import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../service.model';


@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  @Input() service: any;

  ngOnInit(): void {
  }

}
