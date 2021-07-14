const initialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

const sortByReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_sortBy_PENDING':
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_sortBy_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data,
        info: payload.data.info,
      };
    case 'GET_sortBy_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};

export default sortByReducer;
