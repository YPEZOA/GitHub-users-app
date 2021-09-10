import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Output() searchUser = new EventEmitter<string>();
  @Input() theme!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleSearchUser(e: any) {
    let user = e.target.value;
    if (user.trim() == '') return;
    this.searchUser.emit(user)
  }

  public getTheme(): string {
    return this.theme;
  }

}
