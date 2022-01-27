import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-providers',
  templateUrl: './page-providers.component.html',
  styleUrls: ['./page-providers.component.css']
})
export class PageProvidersComponent implements OnInit {

  page: number = 0;
  providers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
