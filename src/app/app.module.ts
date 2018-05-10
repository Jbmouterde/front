import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ArticleService } from './services/article.service';
import { ReportsPipe } from './pipes/reports.pipe';

import { DetailsArticleComponent } from './details-article/details-article.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TypePipe } from './pipes/type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDisplayComponent,
    AddFormComponent,
    ReportsPipe,
    DetailsArticleComponent,
    LoginComponent,
    SignupComponent,
    TypePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
