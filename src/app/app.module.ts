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
import { PosterCardComponent } from './pages/projects-page/poster-card/poster-card.component';
import { ServiceCardComponent } from './pages/services-page/services/service-card/service-card.component';
import { ServicesComponent } from './pages/services-page/services/services.component';


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
    PosterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
