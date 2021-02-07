import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { environment } from '../environments/environment';
import { promise } from 'protractor';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  user:User;
  repo:Repo;

  constructor(private http:HttpClient) { 
    this.user= new User("","","","","","","","",new Date());
    this.repo = new Repo("","","","",0);
  }

  getUsers(userName:string){
    interface ApiResponse{
      public_repos:string,
      login:string,
      html_url:string,
      name:string,
      avatar_url: string,
      followers:string,
      following:string,
      repos_url:string,
      created_at:Date,
    }
    let promise = new Promise<void>((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + userName + '?access_token=' + environment.apikey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.user = res;
            resolve();
          },
          (error) =>{
            reject();
          }
        );
    });
    return promise;
  }
  //Get Repo
  getRepo(userName:string){
    interface ApiResponse{
      html_url:string,
      name:string,
      repos_url:string,
      description:string,
      forks_count:number,
    }

    let promise = new Promise<void>((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + userName + '/repos?access_token=' + environment.apikey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.repo = res;
            resolve();
          },
          (error)=>{
            reject();
          }
        );
    });
    return promise;
  }

  
}
