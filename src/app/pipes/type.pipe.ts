import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: Array<Article>, searchTerm: string): any {
    if(!value) {
      return [];
    }

    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray = [];

    value.forEach((oneArticle) => {
      const lowerArticleName = oneArticle.type.toLowerCase();
      if (lowerArticleName.includes(searchTerm)) {
        filteredArray.push(oneArticle);
      }
    });
    return filteredArray;
  }


}
