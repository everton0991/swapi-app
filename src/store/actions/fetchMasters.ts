import { API } from '../../config';
import {
  FETCHING_MASTER,
  FETCH_MASTER_SUCCEEDED,
  FETCH_MASTER_FAILED
} from '../types';

export const fetchMaster = () => (dispatch: any) => {
  const lightSide = API.get('people/1');
  const darkSide = API.get('people/4');

  dispatch({ type: FETCHING_MASTER });

  Promise.race([lightSide, darkSide])
    .then(({ data = {} }) => {
      setTimeout(() => {
        dispatch({ type: FETCH_MASTER_SUCCEEDED, payload: data });
      }, 1000);
    })
    .catch((error) => {
      dispatch({ type: FETCH_MASTER_FAILED, error });
    });
};
