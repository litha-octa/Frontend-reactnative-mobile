import axios from 'axios';
export const getUser = url => {
  return {
    type: 'GET_getUser',
    payload: axios.get(url),
  };
};
export const updateUser = (url, user_id) => {
  return {
    type: 'PATCH_updateUser',
    payload: axios.patch(url, user_id),
  };
};
