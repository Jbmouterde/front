import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDisplayComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
