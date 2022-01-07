import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent implements OnInit {

  @Input() axis: number = 1;
  @Input() title: string = "Default";
  @Input() description: string = "Default";

  constructor() { }

  ngOnInit(): void {
  }

}
