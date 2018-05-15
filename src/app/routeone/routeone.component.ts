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

  public doughnutChartLabels:string[] = ['Personal Information', 'Interview', 'Story', 'Projects', 'Publication'];
  public doughnutChartData:number[] = [50, 30, 15, 5, 0];
  public doughnutChartType:string = 'doughnut';
  public dataDonut(){
    return 31 ; 
  }

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
