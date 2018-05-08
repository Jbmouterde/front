import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {

   //google map zone

   var mapProp = {
    center: new google.maps.LatLng(18.5793, 73.8143),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

}
