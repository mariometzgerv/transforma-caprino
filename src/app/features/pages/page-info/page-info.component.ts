import { Component, OnInit } from '@angular/core';
import purposeinfo from "src/assets/files/purpose-info.json";
import axisinfo from "src/assets/files/axis-info.json";
import profileinfo from "src/assets/files/profile-info.json";

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.css']
})
export class PageInfoComponent implements OnInit {

  axis_info: { title: string, objective: string, initiatives: Array<string> } [] = axisinfo;
  purpose_info: { title: string, description: string } [] = purposeinfo;
  profile_info: { name: string, role: string, prof: string, sub: string, des: string, img: string } [] = profileinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
