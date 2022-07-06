import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  @Input() service!: Service;

  ngOnInit(): void {
  }

}
