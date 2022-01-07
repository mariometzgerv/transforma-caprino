import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent implements OnInit {

  @Input() title: string = "Default";
  @Input() description: string = "Default";

  constructor() { }

  ngOnInit(): void {
  }
  
}
