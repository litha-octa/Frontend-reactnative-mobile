import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';

import rootReducer from './reducers';
import rpm from 'redux-promise-middleware';

// const composeEnhancers =
//     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//         : compose;

// const enhancers = composeEnhancers(
//     applyMiddleware(rpm),
//     // other store enhancers if any
// );

const enhancers = applyMiddleware(rpm);
export const store = createStore(rootReducer, enhancers);
export const persistor = persistStore(store);
