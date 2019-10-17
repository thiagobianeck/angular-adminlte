import { Component, OnInit } from '@angular/core';
import {Dashboardv1Service} from '../services/dashboardv1.service';
import {Statbox} from '../components/statbox/statbox.model';

@Component({
  selector: 'app-dashboardv1',
  templateUrl: './dashboardv1.component.html',
  styleUrls: ['./dashboardv1.component.css']
})
export class Dashboardv1Component implements OnInit {

  statBoxes: Array<Statbox> = [];

  constructor(public dashboardv1Service: Dashboardv1Service) { }

  ngOnInit() {
    this.loadStatBoxes();
  }

  loadStatBoxes() {
    this.dashboardv1Service.loadStatBoxes()
      .subscribe((results: Array<Statbox>) => {
        this.statBoxes = results;
      });
  }

}
