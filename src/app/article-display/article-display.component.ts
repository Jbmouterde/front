import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {

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
