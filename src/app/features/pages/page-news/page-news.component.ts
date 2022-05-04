import { Component, OnInit } from '@angular/core';
import newsinfo from "src/assets/files/news-info.json";

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.css']
})
export class PageNewsComponent implements OnInit {

  page: number = 0;
  news: { id: number, date: string, title: string, url: string, img: string } [] = newsinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
