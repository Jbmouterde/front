import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
articles: Array<Article>;
  transform(value: Array<Article>, typeTerm: string): any {
    function filterMe () {

      const typeArray = [];
  
      value.forEach((oneArticle) => {
        const lowerArticleType = oneArticle.type.toLowerCase();
        if (lowerArticleType)  {
          typeArray.push(oneArticle);
        }
      });
      return typeArray;
    }
    
  }

 
}
  
  

