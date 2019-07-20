import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.username
);

const makeSelectTown = () => createSelector(
  selectHome,
  (homeState) => homeState.town
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectTown
};
