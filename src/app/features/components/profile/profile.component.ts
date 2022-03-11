import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() name: string = "Default";
  @Input() role: string = "Role Default";
  @Input() prof: string = "Prof Default";
  @Input() sub: string = "Sub Default";
  @Input() des: string = "Des Default";
  @Input() img: string = "./assets/images/profile/franco_cares.png";

  constructor() { }

  ngOnInit(): void {
  }

}
