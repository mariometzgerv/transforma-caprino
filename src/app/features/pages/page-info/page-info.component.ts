import { Component, OnInit } from '@angular/core';
import purposeinfo from "src/assets/files/purposeinfo.json";

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.css']
})
export class PageInfoComponent implements OnInit {

  purpose_info: { title: string, description: string } [] = purposeinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
