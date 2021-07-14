// const initialState = {
//   currentUser: {},
//   isPending: false,
//   isFulfilled: false,
//   isRejected: false,
//   isLogin: false,
// };
// export const loginReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case 'POST_login_PENDING':
//       return {
//         ...state,
//         isPending: true,
//         isFulfilled: false,
//         isRejected: false,
//       };
//     case 'POST_login_FULFILLED':
//       return {
//         ...state,
//         isFulfilled: true,
//         isPending: false,
//         result: payload.data.result,
//         isLogin: true,
//       };
//     case 'POST_login_REJECTED':
//       return {
//         ...state,
//         isRejected: true,
//         isPending: false,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };

// export const getUserReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case 'GET_getUser_PENDING':
//       return {
//         ...state,
//         isPending: true,
//         isFulfilled: false,
//         isRejected: false,
//       };
//     case 'GET_getUser_FULFILLED':
//       return {
//         ...state,
//         isFulfilled: true,
//         isPending: false,
//         currentUser: payload.data.result[0],
//       };
//     case 'GET_getUser_REJECTED':
//       return {
//         ...state,
//         isRejected: true,
//         isPending: false,
//         result: payload,
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  resultLogin: {},
  errorLogin: {},
  isLoginPending: false,
  isLoginFulfilled: false,
  isLoginRejected: false,

  errorLogout: {},
  isLogoutPending: false,
  isLogoutFulfilled: false,
  isLogoutRejected: false,

  resultRegister: {},
  errorRegister: {},
  isRegisterPending: false,
  isRegisterFulfilled: false,
  isRegisterRejected: false,

  isLogin: false,
};
const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGOUT_USER_PENDING':
      return {
        ...state,
        isLogoutPending: true,
        isLogoutFulfilled: false,
        isLogoutRejected: false,
      };
    case 'LOGOUT_USER_FULFILLED':
      return {
        ...state,
        isLogoutFulfilled: true,
        isLogoutPending: false,
        ...initialState,
      };
    case 'LOGOUT_USER_REJECTED':
      return {
        ...state,
        isLogoutRejected: true,
        isLogoutPending: false,
        errorLogout: payload,
      };
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoginPending: true,
        isLoginFulfilled: false,
        isLoginRejected: false,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoginFulfilled: true,
        isLoginPending: false,
        isLogin: true,
        resultLogin: payload.data.result,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoginRejected: true,
        isLoginPending: false,
        errorLogin: payload,
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isRegisterPending: true,
        isRegisterFulfilled: false,
        isRegisterRejected: false,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isRegisterFulfilled: true,
        isRegisterPending: false,
        resultRegister: payload.data.result,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isRegisterRejected: true,
        isRegisterPending: false,
        errorRegister: payload,
      };
    default:
      return state;
  }
};
export default auth;
