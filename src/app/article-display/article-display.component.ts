import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  articles : Article[] = [];

  constructor(
    public apiTruc : ArticleService
  ) { }

  ngOnInit() {


   //google map zone

   var mapProp = {
    center: new google.maps.LatLng(18.5793, 73.8143),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.apiTruc.getList()
    .then((result : Article[])=>{
      this.articles = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("Article list error")
      console.log(err)
    })
  }

}
