import axios from 'axios';

export const getNewClass = url => {
  return {
    type: 'GET_getNewClass_PAGINATED',
    payload: axios.get(url),
  };
};

export const postNewClass = (url, data) => {
  return {
    type: 'POST_postNewClass',
    payload: axios.post(url, data),
  };
};
