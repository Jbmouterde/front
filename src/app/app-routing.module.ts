import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  { path : '', component : ArticleDisplayComponent},
  { path:  'add-report', component: AddFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
