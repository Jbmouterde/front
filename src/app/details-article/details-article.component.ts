import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  articleId : string;
  article : Article;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(
    private reqTruc : ActivatedRoute,
    public apiTruc : ArticleService, 
    private resTruc : Router
  ) { }

  ngOnInit() {
    //map
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
    // new map
    this.reqTruc.paramMap
    .subscribe((myParams)=>{
     this.articleId=myParams.get("blahId");
     console.log(this.articleId)

     this.fetchPhoneData();
    });
  }
  
  fetchPhoneData(){
    // component connect to the service 
    this.apiTruc.getDetails(this.articleId)
    .then((result: Article)=>{
     this.article=result
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}

