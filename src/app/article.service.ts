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

}

export class Article {
  _id : string; 
  title : string; 
  date : string; 
  type : string; 
  email : string
};