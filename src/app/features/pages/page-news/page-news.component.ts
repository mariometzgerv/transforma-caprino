import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.css']
})
export class PageNewsComponent implements OnInit {

  page: number = 0;
  news: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor() { }

  ngOnInit(): void {
  }

}
