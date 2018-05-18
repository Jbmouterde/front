import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Article, ArticleService } from '../services/article.service';

@Component({
  selector: 'app-routeone',
  templateUrl: './routeone.component.html',
  styles: []
})
export class RouteoneComponent implements OnInit {
  // OTHER PIE
  article = Article;
  articles : Article[] = [];

  // @Input('number') public num : number; 
a : number = 0
b : number = 10
c : number = 34
d : number = 4
e : number = 10
jack : number = 0

// public dataDonut(){
//   const that = this
//   this.articles.forEach((oneArticle) => {
//     if (oneArticle.species == 'Mammals'){
//       that.b ++ 
//     }
//     else if(oneArticle.species == 'Reptiles'){
//       that.c ++
//     }
//     else if(oneArticle.species == 'Aquatic Animals'){
//         const jack = that.d ++
//     }
//     else if(oneArticle.species == 'Insects'){
//       that.e ++
//     }
//     else if(oneArticle.species == 'Birds'){
//       that.a ++
//       console.log(that.a)
//     }
//   })
// }



  public doughnutChartLabels:string[] = ['Insects', 'Mammals', 'Aquatic Animals', 'Birds', 'Reptiles'];
  public doughnutChartData :number[] = [this.jack, this.b, this.d,this.c, this.e];
  public doughnutChartType:string = 'doughnut';


  public doughnutChartLabel:string[] = ['Personal Observation', 'Article', 'Interview', 'Story', 'Publication'];
  public doughnutChartDat :number[] = [30, 10, 4,3, 10];
  public doughnutChartTyp:string = 'doughnut';


  public doughnutChartLabe:string[] = ['In Danger', 'High', 'Almost Extinct'];
  public doughnutChartDa :number[] = [1, 5, 10];
  public doughnutChartTy:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 



  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    private router: Router,
    public apiTruc : ArticleService
  ){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }
  
  ngOnInit() {



    }




  }