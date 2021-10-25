import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-lat-lng',
  templateUrl: './lat-lng.component.html',
  styleUrls: ['./lat-lng.component.css']
})
export class LatLngComponent implements OnInit {
  title = 'Latitude and Longitude';
  latlngForm = new FormGroup({
    lat : new FormControl(' '),
    lng : new FormControl( ' '),

  });
 
  // lat = 13.041456;
  // lng = 80.252014 ;cd

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.latlngForm.value);
  }

}
