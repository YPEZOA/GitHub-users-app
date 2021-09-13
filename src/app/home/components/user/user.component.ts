import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userData: any;
  @Input() theme!: string;

  constructor() { }

  ngOnInit(): void { }

  public getTheme(): string {
    return this.theme;
  }

}
