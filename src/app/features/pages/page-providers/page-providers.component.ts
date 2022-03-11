import { Component, OnInit } from '@angular/core';
import providerinfo from "src/assets/files/provider-info.json";

@Component({
  selector: 'app-page-providers',
  templateUrl: './page-providers.component.html',
  styleUrls: ['./page-providers.component.css']
})
export class PageProvidersComponent implements OnInit {

  provider_info: { id: number, owner: string, name: string, city: string, mail: string, product: string, img: string } [] = providerinfo;
  page: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
