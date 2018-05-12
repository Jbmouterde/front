import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import 'rxjs/operator/toPromise';

@Injectable()
export class ArticleService {

  constructor(
    private ajaxTruc : HttpClient
  ) { }

// GET / ARTICLES



getList(){
  return this.ajaxTruc
  .get('http://localhost:3000/api/articles')
  .toPromise();
}
getDetails(articleId){
  return this.ajaxTruc
  .get(`http://localhost:3000/api/articles/${articleId}`)
  .toPromise();
}
// FORM ADD ARTICLE 
addArticle(creds : Creds){
  return this.ajaxTruc
  .post('http://localhost:3000/api/articles', creds)
  .toPromise()
  .then((apiResponse: any)=>{
    return apiResponse;
  })
}

//DELETE ARTICLE 
delete(articleId){
  return this.ajaxTruc
  .delete(`http://localhost:3000/api/articles/${articleId}`)
  .toPromise()
}

// API NEWS 
getNews(){
  return this.ajaxTruc.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=17ff854720b449c6bbd72574e7a18d9e')
  .toPromise();
}

}

export class Article {
  _id : string; 
  title : string; 
  date : Date; 
  description : string;
  nameWritter : string;
  location : string;
  email : string;
  imageUrl : string ; 
  organization : string; 
  reportChange : string; 
  type : string ; 
};

export class Creds {
  title : string; 
  date : Date; 
  description : string;
  nameWritter : string;
  location : string;
  email : string;
  imageUrl : string ; 
  organization : string; 
  reportChange : string; 
  type : string ; 
};

export class News {
  
  source: {
    id: number,
    name: string
};
author: string;
title: string;
description: string;
url: string;
urlToImage: string;
publishedAt: Date;
}