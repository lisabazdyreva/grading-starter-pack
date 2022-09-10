import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const setFetchStatusQuests = (state: State): 'trying' | 'success' | 'error' => {
  return state[NameSpace.status].fetchStatusQuests;
}

export const setFetchStatusDetailedQuest = (state: State): 'trying' | 'success' | 'error' => {
  return state[NameSpace.status].fetchStatusDetailedQuest;
}