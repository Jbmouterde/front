import { Component, OnInit } from '@angular/core';
import { ArticleService, Article, News} from '../services/article.service';
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
 a : number = 0 
 b : number = 0
 c : number = 0
 d : number = 0
 e : number = 0
 f : number = 0
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
  articleId : string; 
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

markerIconUrl() {
  return require('../../assets/images/Icon1.png')
}

classState : any = {

  descriptionYolo: true,

} 

classState4 : any = {


  descriptionYolo4 : true

} 
classState2 : any = {


  descriptionYolo2 : true,

} 
classState3 : any = {


  descriptionYolo3 : true,

} 
classState5 : any = {

  descriptionYolo5 : true
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
      this.articles = result; 
      this.a = this.articles.length;
      this.articles.forEach((oneArticle) => {
        if (oneArticle.species == 'Mammals'){
          this.b ++ 
        }
        else if(oneArticle.species == 'Reptiles'){
          this.c ++
        }
        else if(oneArticle.species == 'Aquatic Animals'){
          this.d ++
        }
        else if(oneArticle.species == 'Insects'){
          this.e ++
        }
        else if(oneArticle.species == 'Birds'){
          this.f ++
        }
      })
    //   for(let i = 0 ; i < this.articles.length; i ++){
    //   if (this.articles[1].species){
    //     this.b ++ 
    //     console.log(this.articles.species[0])

    //     console.log(this.b)
       
    //   }
    //   else if (this.articles.species){
    //   this.c ++
    //   console.log(this.articles[1].species)
   
    //   }
    //   else if (this.articles[2].species){
    //     this.d ++ 
       
    //   }
    //   else if (this.articles[3].species){
    //     this.f ++ 
       
    //   }
    //   else if (this.articles[4].species){
    //     this.e ++ 
       
    //   }
    // }
      // console.log (this)
      // console.log (this.articles)
      // console.log (this.articles[2])
      // console.log (this.articles[2].species)
      // console.log(result, "ok")
    })
    .catch((err)=>{
      console.log("Article list error")
      console.log(err)
    })
  }

  /// UPDATE TEST db.photos.update(
//     { 
//       "_id": ObjectId("54bb201aa3a0f26f885be2a3"), 
//       "likes": { "$ne": ObjectId("54bb2244a3a0f26f885be2a4") }
//   },
//   {
//       "$inc": { "likeCount": 1 },
//       "$push": { "likes": ObjectId("54bb2244a3a0f26f885be2a4") }
//   }
// )
// increaseLike(id: string) {

//   this.apiTruc.updateLike(this.articleId, Credd)
// }

// 
// btn see more on the article 
toggleDescriptionClass(){
  this.classState.descriptionYolo = !this.classState.descriptionYolo;
}
toggleDescriptionClass2(){
  this.classState2.descriptionYolo2 = !this.classState2.descriptionYolo2;
}
toggleDescriptionClass3(){
  this.classState3.descriptionYolo3 = !this.classState3.descriptionYolo3;
}
toggleDescriptionClass4(){
  this.classState4.descriptionYolo4 = !this.classState4.descriptionYolo4;
}
toggleDescriptionClass5(){
  this.classState5.descriptionYolo5 = !this.classState5.descriptionYolo5;
}




  // TEST BUTTON +1 
  increaseCount(oneArticle: Article){
    this.apiTruc.updateLike(oneArticle._id)
      .then((result: Article) => {
        oneArticle.likes = result.likes;
      })
      .catch((err)=>{
        console.log("Article LIKE error")
        console.log(err)
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

