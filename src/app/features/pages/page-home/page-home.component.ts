import { Component, OnInit } from '@angular/core';
import axisinfo from "src/assets/files/axis-info.json";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  axis_info: { axis: number, title: string, description: string } [] = axisinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
