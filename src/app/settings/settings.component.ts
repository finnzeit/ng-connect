import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService } from '../shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  // tslint:disable-next-line:no-inferrable-types
  isSubmitting: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // Create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
    // Optional: subscribe to changes on the form
    // this.settingsForm.valueChanges.subscribe(value => this.updateUser(values));
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateUser(this.settingsForm.value);

    this.userService
      .update(this.user)
      .subscribe(
        updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

  updateUser(values: Object) {
    (<any>Object).assign(this.user, values);
  }

}
