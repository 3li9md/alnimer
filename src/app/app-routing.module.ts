import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InnerMoviePageComponent } from './pages/projects-page/posters-page/inner-movie-page/inner-movie-page.component';
import { MoviesPageComponent } from './pages/projects-page/posters-page/movies-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: "services", component: ServicesPageComponent },
    {
      path: "projects", component: ProjectsPageComponent
    },
    { path: "about", component: AboutPageComponent },
    { path: "contact", component: ContactPageComponent },
    { path: "projects/movies", component: MoviesPageComponent },
    { path: "projects/movies/:id", component: InnerMoviePageComponent },
    { path: "**", component: PageNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
