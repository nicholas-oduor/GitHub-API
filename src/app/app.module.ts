import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GithubComponent } from './github/github.component';
import { HomeRepoComponent } from './home-repo/home-repo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyAccountServicesComponent } from './my-account-services/my-account-services.component';
import { MyReposComponent } from './my-repos/my-repos.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GithubComponent,
    HomeRepoComponent,
    HomepageComponent,
    MyAccountServicesComponent,
    MyReposComponent,
    NavComponent,
    NotFoundComponent,
    SearchRepositoriesComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
