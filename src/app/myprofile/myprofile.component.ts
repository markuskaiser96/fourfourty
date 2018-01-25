import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myprofile',
  templateUrl: './myprofile.component.html',
})
export class MyProfileComponent implements OnInit {
  title = "Mein Profil";
  
  constructor() {  }

  ngOnInit() {}
}
