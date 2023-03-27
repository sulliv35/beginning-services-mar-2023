import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authFeature } from '../../state';
import { authEvents } from '../../state/auth.actions';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.css'],
})
export class AuthStatusComponent {
  loggedIn$ = this.store.select(authFeature.selectLoggedIn);
  user$ = this.store.select(authFeature.selectUser);
  constructor(private readonly store: Store) {}

  logOut() {
    this.store.dispatch(authEvents.logOutRequsted());
  }
  logIn() {
    this.store.dispatch(authEvents.logInRequested());
  }
}
