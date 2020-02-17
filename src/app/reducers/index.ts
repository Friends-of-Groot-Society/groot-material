import { SearchResultsReducer } from './search-results-reducer';
import { MenuReducer } from './menu-reducer';

// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';

// import { environment } from '../../environments/environment';

// export interface State {

// }
export const reducers = {
  searchResults: SearchResultsReducer,
  menuState: MenuReducer
}
// export const reducers: ActionReducerMap<State> = {
// };  
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
