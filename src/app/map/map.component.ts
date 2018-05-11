import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 latitude = 51.678418;
 longitude = 7.809007;
 locationChosen = false

 onChooseLocation(event){
   this.latitude = event.coords.lat;
   this.longitude = event.coords.lng;

   this.locationChosen = true


 }
  constructor() { }


  ngOnInit() {
  }

}
