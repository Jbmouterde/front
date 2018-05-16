import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ArticleDisplayComponent } from './article-display/article-display.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ArticleService } from './services/article.service';
import { ReportsPipe } from './pipes/reports.pipe';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DetailsArticleComponent } from './details-article/details-article.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TypePipe } from './pipes/type.pipe';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AboutComponent } from './about/about.component';
import { RouteoneComponent } from './routeone/routeone.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { SpeciesPipe } from './pipes/species.pipe';
import { DangerPipe } from './pipes/danger.pipe';


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
    AllArticlesComponent,
    AboutComponent,
    RouteoneComponent,
    MapComponent,
    AdminComponent,
    NewsComponent,
    SpeciesPipe,
    DangerPipe
    
    
    
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAbsDqOb54l-4NXptl4QZz17OieIkHGq6I",
      libraries: ["places"]
    })
  ],
  providers: [ArticleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
