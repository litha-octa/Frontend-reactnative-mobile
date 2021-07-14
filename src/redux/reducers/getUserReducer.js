const initialState = {
  currentUser: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const getUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_getUser_PENDING':
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_getUser_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        currentUser: payload.data.result,
      };
    case 'GET_getUser_REJECTED':
      return {
        ...state,
        isRejected: true,
        isPending: false,
        result: payload,
      };
    default:
      return state;
  }
};
export default getUserReducer;