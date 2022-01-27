import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent implements OnInit {

  @Input() axis: number = 1;
  @Input() title: string = "Default";
  @Input() objective: string = "Default";
  @Input() initiatives: Array<string> = [];
  @Input() expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expand(): void {
    this.expanded = !this.expanded;
  }

}
