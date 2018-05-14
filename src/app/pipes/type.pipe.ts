import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
articles: Array<Article>;
  transform(articles: Array<Article>, typeTerm: string): Array<Article> {
    

    if(!articles) {
      return [];
    }

    if (!typeTerm) {
      
      return articles;
    }


    return articles.filter(function(article) {
      console.log(article.type === typeTerm)
      return (article.type === typeTerm);
    })
      
    
  }

 
}
  
  

