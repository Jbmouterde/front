import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'species'
})
export class SpeciesPipe implements PipeTransform {
  articles: Array<Article>;
  transform(articles: Array<Article>, speciesTerm: string): Array<Article> {
    

    if(!articles) {
      return [];
    }

    if (!speciesTerm) {
      
      return articles;
    }

    

    return articles.filter(function(article) {
      console.log(article.species === speciesTerm)
      return (article.species === speciesTerm);
    })
      
    
  }

 
}
  