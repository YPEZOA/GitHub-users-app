import { Component, HostBinding, OnInit } from '@angular/core';
import { GithubServicesService } from '../services/github-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: any;
  theme!: string;
  isDarkTheme: boolean;

  constructor(private githubService: GithubServicesService) { 
    this.theme = 'light-theme'
    this.isDarkTheme = false;
  }

  ngOnInit(): void {
  }

  public onHandleSearchUser(user: string): void {
    this.githubService.searchUsers(user).subscribe(resp => {
      this.userData = resp
    })
  }

  public onSetTheme(event: any) {
    this.isDarkTheme = event.target.checked
    this.isDarkTheme ? this.theme = 'dark-theme' : this.theme = 'light-theme'
  }

  public getTheme() {
    return this.theme;
  }

}
