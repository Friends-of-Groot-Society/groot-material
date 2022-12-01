import { Action } from '@ngrx/store';
 
import { Chain } from '../models/Chain';

export const SET_AVAILABLE_CHAINS = 'SetAvailableChains';
export const SET_FINISHED_CHAINS = 'SetFinishedChains';
export const START_CHAINS = 'StartChains'; 
export const STOP_CHAINS = 'EndChains'; 

export class SetAvailableChains implements Action {
  readonly type = SET_AVAILABLE_CHAINS;
  constructor(public payload: Chain[]) {}
}

export class SetFinishedChains implements Action {
  readonly type = SET_FINISHED_CHAINS;
  constructor(public payload: Chain[]) {}
}

export class StartChains implements Action {
  readonly type = START_CHAINS;
  constructor(public payload: string) {}
}

export class  EndChains implements Action {
  readonly type = STOP_CHAINS;
   // no payload bc already stored in NGRX
}

export type ChainActions = SetAvailableChains | SetFinishedChains | StartChains | EndChains;
