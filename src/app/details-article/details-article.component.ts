import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Article, ArticleService, News } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

// import '../../assets/stripe.js'

// import * as Stripe from 'stripe';
// const stripe = new Stripe('pk_test_NLInK4w6r3f4X88AjNLlig4');

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit , AfterViewInit, OnDestroy{
  articleId : string;
  article : Article;
 
// 
@ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  // 

  constructor(
    private reqTruc : ActivatedRoute,
    public apiTruc : ArticleService, 
    private resTruc : Router,
    public userTruc : UserService, 
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    //test
   

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
//test 



//
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
 
        ngAfterViewInit() {
          this.card = elements.create('card');
          this.card.mount(this.cardInfo.nativeElement);
      
          this.card.addEventListener('change', this.cardHandler);
        }
      
        ngOnDestroy() {
          this.card.removeEventListener('change', this.cardHandler);
          this.card.destroy();
        }
      
        onChange({ error }) {
          if (error) {
            this.error = error.message;
          } else {
            this.error = null;
          }
          this.cd.detectChanges();
        }
      
        async onSubmit(form: NgForm) {
          const { token, error } = await stripe.createToken(this.card);
      
          if (error) {
            console.log('Something is wrong:', error);
          } else {
            console.log('Success!', token);
            // ...send the token to the your backend to process the charge
          }
        }
      }
      

