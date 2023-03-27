import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { authFeature } from './state';
import { AuthStatusComponent } from './components/auth-status/auth-status.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthEffects } from './state/auth.effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature([AuthEffects]),
    BrowserModule,
    AuthModule.forRoot({
      config: {
        authority: environment.auth.authority,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: environment.auth.clientId,
        scope: environment.auth.scope, // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
        secureRoutes: [environment.locationsApi],
      },
    }),
  ],
  exports: [AuthModule, AuthStatusComponent],
  declarations: [AuthStatusComponent],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  ],
})
export class AuthConfigModule {}
