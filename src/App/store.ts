import { SongDTO } from '../models/songs';
import { createReducer } from '../utils/reducer';

export type AppState = {
  songs: Array<SongDTO>;
};

const { actions, reducer } = createReducer<AppState>({
  setSongs: (state, payload) => {
    return {
      ...state,
      songs: payload,
    };
  }
});

export {
  actions as appActions,
  reducer as appReducer,
};