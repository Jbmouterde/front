import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../services/article.service';

@Pipe({
  name: 'reports'
})
export class ReportsPipe implements PipeTransform {

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
      const lowerArticleName = oneArticle.title.toLowerCase();
      if (lowerArticleName.includes(searchTerm)) {
        filteredArray.push(oneArticle);
      }
    });
    return filteredArray;
  }

}
