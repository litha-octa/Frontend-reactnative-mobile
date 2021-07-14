// import {loginReducer,getUserReducer} from './auth';
import auth from './auth';
import getUserReducer from './getUserReducer';
import sortBy from './sortBy';
import {combineReducers} from 'redux';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
// loginReducer,getUserReducer,
const reducers = combineReducers({auth, getUserReducer, sortBy});

export default persistReducer(persistConfig, reducers);
