import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { locationCommands } from '../../state/actions/location.actions';
import { selectLocationsModel } from '../../state/locations.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  model$ = this.store.select(selectLocationsModel);
  constructor(private readonly store: Store) {
    store.dispatch(locationCommands.load());
  }
}
