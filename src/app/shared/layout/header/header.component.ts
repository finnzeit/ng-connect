import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
