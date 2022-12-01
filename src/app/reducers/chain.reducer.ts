import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ChainActions,
  SET_AVAILABLE_CHAINS,
  SET_FINISHED_CHAINS,
  START_CHAINS,
  STOP_CHAINS,
} from './chain.actions'; 
import { Chain } from '../models/Chain';
import * as fromRoot from './app.reducer'; 

export interface ChainState {
  /// State for this module;
  availableChains: Chain[]; /// bc this is lazy loaded;
  finishedChains: []; // Chain State Knows about the app state, but app state doesn't know about Chain!!
  activeChains: Chain | null;
}

export interface State extends fromRoot.State {
  chain: ChainState;
}
const initialState: ChainState = {
  availableChains: [], // based on state 
  finishedChains: [],
  activeChains: null,
};
 
export function chainReducer(state = initialState, action: ChainActions) {
  switch (action.type) {
    case SET_AVAILABLE_CHAINS:
      return {
        ...state, // this will pull out available and finished
        availableChains: action.payload
      };
    case SET_FINISHED_CHAINS:
      return {
        ...state, // this will pull out available and finished
        finishedChains: action.payload
      };
    case START_CHAINS:
      return {
        ...state, // this will pull out available and finished
        activeChains: { ... state.availableChains.find(ex => ex.id === action.payload) }
      };
    case STOP_CHAINS:
      return {
        ...state,
        activeChains: null
      };
    default: {
      return state;
    }
  }
}
export const getChainState = createFeatureSelector<ChainState>('chain');

// export const getAvailableChains = (state: ChainType) => state.availableChains;
export const getAvailableChains = createSelector(getChainState, (state: ChainState) => state.availableChains);
export const getFinishedChains = createSelector(getChainState, (state: ChainState) => state.finishedChains);
export const getActiveChain = createSelector(getChainState, (state: ChainState) => state.activeChains);
export const getIsChain = createSelector(getChainState, (state: ChainState) => state.activeChains != null);
