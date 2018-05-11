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

  deleteClick(){
    const {title} =this.article
    
    const isOkay = confirm(`Are you sure you want to delete ${title}?`)
    
        if(!isOkay){
          return; 
        }
    
        this.apiTruc.delete(this.articleId)
          .then(()=>{
            this.resTruc.navigateByUrl('/admin');
          })
          .catch((err)=>{
            console.log('article error delete')
            console.log(err)
          })
        }
}

