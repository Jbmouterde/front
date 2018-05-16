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
// UPDATE likes 

// updateLike(articleId, Credd){
//   return this.ajaxTruc
//   .put(`http://localhost:3000/api/articles/${articleId}`, Credd)
//   .toPromise();
// }
//
// API NEWS 
getNews(){
  return this.ajaxTruc.get('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=17ff854720b449c6bbd72574e7a18d9e')
  .toPromise();
}

}


// export class Credd{
//   like : number; 
// }

export class Article {
  _id : string; 
  title : string; 
  date : Date; 
  description : string;
  nameWritter : string;
  // location : string;
  coordinates: number[];
  email : string;
  imageUrl : string ; 
  organization : string; 
  species : string; 
  type : string ; 
  like : number;
  danger : string;
  descriptif : string; 

};

export class Creds {
  title : string; 
  date : Date; 
  description : string;
  nameWritter : string;
  email : string;
  imageUrl : string ; 
  organization : string; 
  species : string; 
  type : string ; 
  coordinates: number[];
  danger : string; 
  descriptif : string; 
  // like : number = 0;

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