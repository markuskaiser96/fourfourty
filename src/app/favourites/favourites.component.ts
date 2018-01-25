import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
})
export class FavouritesComponent implements OnInit {

  title = "Favourites";

  constructor() {  }

  ngOnInit() {}
}
