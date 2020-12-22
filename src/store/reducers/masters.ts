import { FETCH_MASTER } from '../types';

const initialState = {
  master: {
    name: ''
  }
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCH_MASTER: {
      const { name } = action.payload;

      return {
        ...state,
        master: { ...state.master, name }
      };
    }

    default:
      return state;
  }
}
