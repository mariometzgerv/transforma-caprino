import { Component, OnInit } from '@angular/core';
import objectiveinfo from "src/assets/files/objective-info.json";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  obj_info: { title: string } [] = objectiveinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
