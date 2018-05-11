import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AboutComponent } from './about/about.component';
import { RouteoneComponent } from './routeone/routeone.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path : '', component : ArticleDisplayComponent},
  { path:  'add-report', component: AddFormComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'articles', component : AllArticlesComponent},
  { path : 'about', component : AboutComponent},
  { path : 'map', component : MapComponent},
  { path: 'routeone', component: RouteoneComponent },

  { path:  'article/:blahId', component: DetailsArticleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
