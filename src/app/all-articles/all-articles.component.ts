import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';


@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  articles : Article[] = [];


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

}
