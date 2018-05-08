import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  articleId : string;
  article : Article;

  constructor(
    private reqTruc : ActivatedRoute,
    public apiTruc : ArticleService, 
    private resTruc : Router
  ) { }

  ngOnInit() {
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
