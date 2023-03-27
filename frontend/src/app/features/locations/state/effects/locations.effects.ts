import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationEntity } from '..';
import {
  locationCommands,
  locationDocuments,
} from '../actions/location.actions';
@Injectable()
export class LocationEffects {
  private readonly baseUrl = environment.locationsApi + 'locations';

  loadLocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(locationCommands.load),
      switchMap(() =>
        this.client.get<{ _embedded: LocationEntity[] }>(this.baseUrl).pipe(
          map((r) => r._embedded),
          map((payload) => locationDocuments.locations({ payload }))
        )
      )
    );
  });

  constructor(
    private readonly client: HttpClient,
    private readonly actions$: Actions
  ) {}
}
