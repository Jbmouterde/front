import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'danger'
})
export class DangerPipe implements PipeTransform {
  articles: Array<Article>;
  transform(articles: Array<Article>, dangerTerm: string): Array<Article> {
    

    if(!articles) {
      return [];
    }

    if (!dangerTerm) {
      
      return articles;
    }


    return articles.filter(function(article) {
      console.log(article.danger === dangerTerm)
      return (article.danger === dangerTerm);
    })
      
    
  }

 
}
  