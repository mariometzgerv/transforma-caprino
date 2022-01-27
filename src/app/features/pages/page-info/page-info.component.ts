import { Component, OnInit } from '@angular/core';
import purposeinfo from "src/assets/files/purpose-info.json";
import axisinfo from "src/assets/files/axis-info.json";

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.css']
})
export class PageInfoComponent implements OnInit {

  axis_info: { axis: number, title: string, objective: string, initiatives: Array<string> } [] = axisinfo;
  purpose_info: { title: string, description: string } [] = purposeinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
