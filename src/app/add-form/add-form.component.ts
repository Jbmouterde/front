import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { ArticleService, Creds } from '../services/article.service';
import { Router } from '@angular/router';
// import '../../assets/map'
// TEST 
import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
//
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})



export class AddFormComponent implements OnInit {
// TEST 

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

//old
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  formCreds : Creds = new Creds();


  
  // // test
  // latitude: any;
  // longitude: any;

  // iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  // markerTypes = [
  //   {
  //     text: "Parking", value: "parking_lot_maps.png"
  //   }
  // ];

  // selectedMarkerType: string = "parking_lot_maps.png";
// fin test

  constructor(
    public userTruc : ArticleService,
    private resTruc : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

  //
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

   //google map zone

  //  var mapProp = {
  //   center: new google.maps.LatLng(18.5793, 73.8143),
  //   zoom: 15,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    
  // };
  // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp)
  // }
  // /////////////////
  // // TEST 
  // setMapType(mapTypeId: string) {
  //   this.map.setMapTypeId(mapTypeId)
  // }

  // setCenter() {
  //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  //   let location = new google.maps.LatLng(this.latitude, this.longitude);

  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     title: 'Got you!'
  //   });

  //   marker.addListener('click', this.simpleMarkerHandler);

  //   marker.addListener('click', () => {
  //     this.markerHandler(marker);
  //   });
  // }

  // simpleMarkerHandler() {
  //   alert('Simple Component\'s function...');
  // }

  // markerHandler(marker: google.maps.Marker) {
  //   alert('Marker\'s Title: ' + marker.getTitle());
  // }

  // showCustomMarker() {


  //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  //   let location = new google.maps.LatLng(this.latitude, this.longitude);

  //   console.log(`selected marker: ${this.selectedMarkerType}`);
    
  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     icon: this.iconBase + this.selectedMarkerType,
  //     title: 'Got you!'
  //   });

  // }

  
  //////////////////////
  articleSubmit(){
    this.userTruc.addArticle(this.formCreds)
    .then((result)=>{
      this.resTruc.navigateByUrl('/')
    })
    .catch((err)=>{
      console.log("Log in error")
      console.log(err)
    });
  }

}

