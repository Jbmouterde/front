import { Component, OnInit } from '@angular/core';
import { ArticleService, Article, News } from '../services/article.service';
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
  userInput: string;
  typeFilter: string = "Project"
  news : Array<News> = [];
  article : Article;
  //test 
myCount : number = 0

classState : any = {

  descriptionYolo: true
} 

  constructor(
    public apiTruc : ArticleService
  ) { }

  ngOnInit() {
    this.apiTruc.getNews()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('news result' ,result.articles)
        // this.news.push(result.articles)
      // console.log(result)
      this.news = result.articles
      // console.log(result)
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })

  
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
//
toggleDescriptionClass(){
  this.classState.descriptionYolo = !this.classState.descriptionYolo;
}

  // TEST BUTTON +1 
  increaseCount(){
    console.log( this.article.like)
    this.article.like += 1
    console.log( this.article.like)
  }
  
  // increaseCount(){
  //   this.myCount += 1
  // }

  setTypeFilter(filterName) {
    this.typeFilter = filterName
  }
  
}
