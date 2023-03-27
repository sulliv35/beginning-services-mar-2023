import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LocationEntity } from '..';

export const locationCommands = createActionGroup({
  source: 'Location Commands',
  events: {
    load: emptyProps(),
  },
});

export const locationDocuments = createActionGroup({
  source: 'Location Documents',
  events: {
    locations: props<{ payload: LocationEntity[] }>(),
  },
});
