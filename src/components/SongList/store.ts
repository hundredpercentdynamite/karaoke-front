import { SongDTO } from '../../models/songs';
import { createReducer } from '../../utils/reducer';
type State = {
  songs: Array<SongDTO>;
};

type Action = {
  type: "choose";
  song: string;
};

export const { actions, reducer } = createReducer<State>({
  choose: (state, payload) => {
    return state;
  },
  setSongs: (state, payload) => {
    return {
      ...state,
      songs: payload,
    };
  }
});