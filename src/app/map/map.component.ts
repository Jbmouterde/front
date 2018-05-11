import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('places') places: GooglePlaceDirective;

  public onChange(address: Address) {
      console.log(address.geometry.location.lng());
      console.log(address.geometry.location.lat());
      console.log(address.geometry.location.toJSON());
      console.log(address.geometry.viewport.getNorthEast());
  }

  public changeConfig() {
      this.places.options.componentRestrictions = new ComponentRestrictions({
          country: "UA"
      });

      this.places.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
