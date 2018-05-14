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

  // article : Article;
  articles : Article[] = [];
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
  
}

