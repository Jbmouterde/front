import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DetailsArticleComponent } from './details-article/details-article.component';

const routes: Routes = [
  { path : '', component : ArticleDisplayComponent},
  { path:  'add-report', component: AddFormComponent},
  { path:  'article/:blahId', component: DetailsArticleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
