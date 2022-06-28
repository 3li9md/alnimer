// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutPageComponent } from './pages/about-page/about-page.component';
// import { ContactPageComponent } from './pages/contact-page/contact-page.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { InnerPosterPageComponent } from './pages/projects-page/posters-page/inner-poster-page/inner-poster-page.component';
// import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
// import { ServicesPageComponent } from './pages/services-page/services-page.component';

// const routes: Routes = [
//   { path: "home", component: HomePageComponent },
//   { path: "services", component: ServicesPageComponent },
//   {
//     path: "projects", component: ProjectsPageComponent, children:
//       [
//         { path: "posters", component: InnerPosterPageComponent }
//       ]
//   },
//   { path: "about", component: AboutPageComponent },
//   { path: "contact", component: ContactPageComponent },
//   { path: "**", component: PageNotFoundComponent },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
