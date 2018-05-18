import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';


@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  articles : Article[] = [];
  a : number = 0 
  userInput: string;
  speciesFilter : string; 
  dangerFilter : string;
  typeFilter: string;


  constructor(
    public apiTruc : ArticleService
  ) { }

  ngOnInit() {

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

