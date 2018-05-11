import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-routeone',
  templateUrl: './routeone.component.html',
  styles: []
})
export class RouteoneComponent implements OnInit {

  constructor(
    private router: Router
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
