import { Component, OnInit } from '@angular/core';
import { GithubServicesService } from '../services/github-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: any;

  constructor(private githubService: GithubServicesService) { }

  ngOnInit(): void {
  }

  public onHandleSearchUser(user: string): void {
    this.githubService.searchUsers(user).subscribe(resp => {
      this.userData = resp
    })
  }

}
