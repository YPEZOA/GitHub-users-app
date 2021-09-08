import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Output() searchUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSearchUser(e: any) {
    let user = e.target.value;
    if (user.trim() == '') return;
    this.searchUser.emit(user)
  }

}
