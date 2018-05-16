import { Component, OnInit } from '@angular/core';
import { ArticleService, Article, News } from '../services/article.service';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ]
})
export class ArticleDisplayComponent implements OnInit {
 
  state: string = 'small';
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}

  @ViewChild('gmap') gmapElement: any;

  // article : Article;
  articles : Article[] = [];
  speciesFilter : string; 
  dangerFilter : string;
  userInput: string;
  typeFilter: string;
  news : Array<News> = [];
 latitude = 51.678418;
 longitude = 7.809007
//  locationChosen = false
  zoom : number = 3;
  likeCount = 0;

 onChooseLocation(event){
  this.latitude = event.coords.lat;
  this.longitude = event.coords.lng;
  console.log(this.articles)
  console.log(this.longitude)
  console.log(this.latitude)

  // this.locationChosen = true
}


classState : any = {

  descriptionYolo: true
} 

  constructor(
    public apiTruc : ArticleService,
    private router: Router,

  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
   }
   sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }

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
// btn see more on the article 
toggleDescriptionClass(){
  this.classState.descriptionYolo = !this.classState.descriptionYolo;
}

  // TEST BUTTON +1 
  increaseCount(id: string){
    
      
     
      this.articles.forEach((oneArticle, index) => {
        if (oneArticle._id === id) {
          oneArticle.like += 1;
          console.log(oneArticle.like)
        
        }
     });

    }
      
      
   
    // console.log( this.article.like)
  
  
  // increaseCount(){
  //   this.myCount += 1
  // }

  setTypeFilter(filterName) {
    this.typeFilter = filterName
  }
  setSpeciesFilter(filterName) {
    this.speciesFilter = filterName
  }
  
  setDangerFilter(filterName) {
    this.dangerFilter = filterName
  }
}

