import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { User } from "../user";
import { GitSearchService } from "../git-search.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  repo!: Repo;
  user!: User;
  constructor(public gitSearchService:GitSearchService) { }

  getUsers(userName: any){ 
    this.gitSearchService.getUsers(userName).then(
      (success)=>{
        this.user= this.gitSearchService.user;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.gitSearchService.getRepo(userName).then(
      (success)=>{
        this.repo= this.gitSearchService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  // getRepo(userName){ 
    

  // }

  ngOnInit(): void {
    this.getUsers("nicholas-oduor");
  }
}
