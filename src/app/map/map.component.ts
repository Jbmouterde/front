import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormControl } from '@angular/forms';

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
 public latitud: number;
 public longitud: number;
 public searchControl: FormControl;
 public zoom: number;

 @ViewChild("search")
 public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {
     //set google maps defaults
     this.zoom = 4;
     this.latitud = 39.8282;
     this.longitud = -98.5795;
 
     //create search FormControl
     this.searchControl = new FormControl();
 
     //set current position
     this.setCurrentPosition();
 
     //load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
         types: ["address"]
       });
       autocomplete.addListener("place_changed", () => {
         this.ngZone.run(() => {
           //get the place result
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
           //verify result
           if (place.geometry === undefined || place.geometry === null) {
             return;
           }
 
           //set latitude, longitude and zoom
           this.latitude = place.geometry.location.lat();
           this.longitude = place.geometry.location.lng();
           this.zoom = 12;
         });
       });
     });
   }
 
   private setCurrentPosition() {
     if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition((position) => {
         this.latitude = position.coords.latitude;
         this.longitude = position.coords.longitude;
         this.zoom = 12;
       });
     }
   }
  }


