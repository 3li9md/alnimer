import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowMeComponent } from './components/follow-me/follow-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { PosterCardComponent } from './pages/projects-page/posters-section/poster-card/poster-card.component';
import { ServiceCardComponent } from './pages/services-page/services/service-card/service-card.component';
import { ServicesComponent } from './pages/services-page/services/services.component';
import { PostersSectionComponent } from './pages/projects-page/posters-section/posters-section.component';
import { SectionTitleComponent } from './pages/projects-page/section-title/section-title.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InnerPosterPageComponent } from './pages/projects-page/posters-section/inner-poster-page/inner-poster-page.component';
import { PostersPageComponent } from './pages/projects-page/posters-page/posters-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FollowMeComponent,
    NavbarComponent,
    HomePageComponent,
    ServicesPageComponent,
    ServicesComponent,
    ServiceCardComponent,
    MainTitleComponent,
    ProjectsPageComponent,
    PosterCardComponent,
    PostersSectionComponent,
    SectionTitleComponent,
    PageNotFoundComponent,
    AboutPageComponent,
    ContactPageComponent,
    InnerPosterPageComponent,
    PostersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
