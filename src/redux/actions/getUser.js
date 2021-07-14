export const getUser = url => {
  return {
    type: 'GET_getUser',
    payload: axios.get(url),
  };
};
