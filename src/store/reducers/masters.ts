import {
  FETCHING_MASTER,
  FETCH_MASTER_SUCCEEDED,
  FETCH_MASTER_FAILED
} from '../types';

const initialState = {
  master: {
    name: ''
  },
  errors: null,
  isLoading: false
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_MASTER: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_MASTER_SUCCEEDED: {
      const { name } = action.payload;

      return {
        ...state,
        master: { name },
        isLoading: false
      };
    }

    case FETCH_MASTER_FAILED: {
      const errors = action.payload;

      return {
        ...state,
        errors,
        isLoading: false
      };
    }

    default:
      return state;
  }
}
