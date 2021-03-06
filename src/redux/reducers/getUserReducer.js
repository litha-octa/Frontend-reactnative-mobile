const initialState = {
  currentUser: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

export const getUserReducer = (state = initialState, {type, payload}) => {
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
        currentUser: payload.data.result[0],
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
export const updateUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'PATCH_updateUser_PENDING':
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'PATCH_updateUser_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        currentUser: payload.data.result[0],
      };
    case 'PATCH_updateUser_REJECTED':
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

//export default getUserReducer;
