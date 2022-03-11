import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  @Input() id: number = 0;
  @Input() owner: string = "Default";
  @Input() name: string = "Default";
  @Input() city: string = "City";
  @Input() mail: string = "caprino@gmail.com";
  @Input() product: string = "Queso - Default";
  @Input() img: string = "./assets/images/profile/franco_cares.png";

  constructor() { }

  ngOnInit(): void {
  }

}
