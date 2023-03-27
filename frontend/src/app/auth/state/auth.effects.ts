import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, mergeMap, tap } from 'rxjs';
import { authCommands, authDocuments, authEvents } from './auth.actions';

@Injectable()
export class AuthEffects {
  relocate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authEvents.logOutRequsted),
        map(() => authCommands.logOffUser()),
        tap(() => this.router.navigateByUrl('/'))
      );
    },
    { dispatch: true }
  );
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authEvents.logInRequested),
        tap(() => this.oidc.authorize())
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authCommands.logOffUser),
        mergeMap(() =>
          this.oidc.logoff().pipe(map(() => authDocuments.nulluser()))
        )
      );
    },
    { dispatch: true }
  );
  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly oidc: OidcSecurityService
  ) {}
}
