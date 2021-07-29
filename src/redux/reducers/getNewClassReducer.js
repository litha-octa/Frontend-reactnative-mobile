const initialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

export const getNewClassReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_getNewClass_PAGINATED_PENDING':
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_getNewClass_PAGINATED_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.result,
        info: payload.data.info,
      };
    case 'GET_getNewClass_PAGINATED_REJECTED':
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
export const postNewClassReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'POST_postNewClass_PENDING':
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'POST_postNewClass_FULFILLED':
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        result: payload.data.result,
      };
    case 'POST_postNewClass_REJECTED':
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
