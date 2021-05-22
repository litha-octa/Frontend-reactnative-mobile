// const initialState = {
//   result: {},
//   isPending: false,
//   isFulfilled: false,
//   isRejected: false,
//   error: {},
//   currentUser: {},
// };

// export const RegisterReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case 'REGISTER_PENDING':
//       return {
//         ...state,
//         isPending: true,
//         isFulfilled: false,
//         isRejected: false,
//       };
//     case 'REGISTER_FULFILLED':
//       return {
//         ...state,
//         isFulfilled: true,
//         isPending: false,
//         result: payload.data.result,
//       };
//     case 'REGISTER_REJECTED':
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

// // export default {registerReducer,loginReducer};
