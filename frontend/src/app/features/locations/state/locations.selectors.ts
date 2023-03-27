import { createSelector } from '@ngrx/store';
import { locationFeature } from '.';

export const selectLocationsModel = createSelector(
  locationFeature.selectLocations,
  locationFeature.selectLoading,
  (locations, loading) => ({
    locations,
    loading,
  })
);
