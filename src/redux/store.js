import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import rpm from 'redux-promise-middleware';

//import allClassReducer from './Reducers/allclass';
import {RegisterReducer} from './reducers/Register';
//import createClassReducer from "./Reducers/createClass";
//import deleteClassReducer from './Reducers/deleteclass';

const reducers = combineReducers({
  //allClassReducer,
  RegisterReducer,
  //createClassReducer,
  //deleteClassReducer,
});
const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;

// import {createStore, applyMiddleware, compose} from 'redux';
// import {persistStore} from 'redux-persist';

// import rootReducer from './reducers';
// import rpm from 'redux-promise-middleware';

// // const composeEnhancers =
// //     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// //         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// //         : compose;

// // const enhancers = composeEnhancers(
// //     applyMiddleware(rpm),
// //     // other store enhancers if any
// // );

// const enhancers = applyMiddleware(rpm);
// export const store = createStore(rootReducer, enhancers);
// export const persistor = persistStore(store);
