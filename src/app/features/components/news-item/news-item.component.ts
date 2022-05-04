import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() id: number = 0;
  @Input() date: string = "01/01/2022";
  @Input() title: string = "Default";
  @Input() url: string = "Default";
  @Input() img: string = "Default";

  constructor() { }

  ngOnInit(): void {
  }

}
