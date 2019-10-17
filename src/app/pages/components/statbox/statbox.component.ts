import {Component, Input, OnInit} from '@angular/core';
import {Statbox} from './statbox.model';

@Component({
  selector: 'app-statbox',
  templateUrl: './statbox.component.html',
  styleUrls: ['./statbox.component.css']
})
export class StatboxComponent implements OnInit {

  @Input() options: Statbox;

  constructor() { }

  ngOnInit() {}

}
