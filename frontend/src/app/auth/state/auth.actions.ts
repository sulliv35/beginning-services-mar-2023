import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const authEvents = createActionGroup({
  source: 'Auth Events',
  events: {
    'Log In Requested': emptyProps(),
    'Log Out Requsted': emptyProps(),
  },
});

export const authCommands = createActionGroup({
  source: 'Auth Commands',
  events: {
    'Log Off User': emptyProps(),
  },
});

export const authDocuments = createActionGroup({
  source: 'Auth Documents',
  events: {
    User: props<{ user: string | null }>(),
    NullUser: emptyProps(),
  },
});
