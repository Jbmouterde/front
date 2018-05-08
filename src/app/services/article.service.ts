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