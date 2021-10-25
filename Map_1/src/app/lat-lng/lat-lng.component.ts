import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lat-lng',
  templateUrl: './lat-lng.component.html',
  styleUrls: ['./lat-lng.component.css']
})
export class LatLngComponent implements OnInit {
  title = 'Latitude and Longitude';
  lat = 13.041456;
  lng = 80.252014 ;

  constructor() { }

  ngOnInit(): void {
  }

}
