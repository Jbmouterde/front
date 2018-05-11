import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles : Article[] = [];
  articleId : string
article : Article

  constructor(
    public apiTruc : ArticleService,
    private resTruc : Router,
    private reqTruc : ActivatedRoute
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
  // deleteClick(){
  //   const {title} =this.article
    
  //   const isOkay = confirm(`Are you sure you want to delete ${title}?`)
    
  //       if(!isOkay){
  //         return; 
  //       }
    
  //       this.apiTruc.delete(this.articleId)
  //         .then(()=>{
  //           this.resTruc.navigateByUrl('/admin');
  //         })
  //         .catch((err)=>{
  //           console.log('article error delete')
  //           console.log(err)
  //         })
  //       }
}
