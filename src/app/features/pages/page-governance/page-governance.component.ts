import { Component, OnInit } from '@angular/core';
import axisinfo from "src/assets/files/axis-info.json";

@Component({
  selector: 'app-page-governance',
  templateUrl: './page-governance.component.html',
  styleUrls: ['./page-governance.component.css']
})
export class PageGovernanceComponent implements OnInit {

  axis_info: { axis: number, title: string, objective: string, initiatives: Array<string> } [] = axisinfo;

  constructor() { }

  ngOnInit(): void {
  }
  
}
