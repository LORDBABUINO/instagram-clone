import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { Auth } from './auth.service'
import { AuthGuard } from './auth-guard.service'
import { Bd } from './bd.service'
import { Progress } from './progress.service'

import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { LoginComponent } from './access/login/login.component';
import { SignUpComponent } from './access/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './home/posts/posts.component';
import { AddPostComponent } from './home/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ Auth, AuthGuard, Bd, Progress ],
  bootstrap: [AppComponent]
})
export class AppModule { }
