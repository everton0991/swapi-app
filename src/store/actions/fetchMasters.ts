import { API } from '../../config';
import { FETCH_MASTER } from '../types';

export const fetchMaster = () => (dispatch: any) => {
  const lightSide = API.get('people/1');
  const darkSide = API.get('people/4');

  Promise.race([lightSide, darkSide]).then(({ data = {} }) => {
    dispatch({ type: FETCH_MASTER, payload: data });
  });
};
