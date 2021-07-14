import axios from 'axios';

const sortBy = url => {
  return {
    type: 'GET_sortBy',
    payload: axios.get(url),
  };
};

export default sortBy;
