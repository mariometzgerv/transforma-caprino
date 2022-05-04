import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import newsinfo from "src/assets/files/news-info.json";

@Component({
  selector: 'app-page-news-detail',
  templateUrl: './page-news-detail.component.html',
  styleUrls: ['./page-news-detail.component.css']
})
export class PageNewsDetailComponent implements OnInit {

  id: number = 0;
  news: { id: number, date: string, title: string, url: string, img: string } [] = newsinfo;
  n: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      {
        this.id =+ params['id'];
        this.n = this.news.find(x => x.id === this.id);
      }
    );
  }

}
