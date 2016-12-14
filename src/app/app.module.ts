import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'projects', component: ProjectsGalleryComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'about-me', component: AboutMeComponent }



];

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import {CvComponent} from "./cv/cv.component";
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjectsGalleryComponent,
    CvComponent,
    ContactMeComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
