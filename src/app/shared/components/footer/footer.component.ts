import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import newsinfo from "src/assets/files/news-info.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  news: { id: number, img:string, date: string, title: string } = newsinfo[0];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      window.scrollTo(0, 0)
    });
  }

}
