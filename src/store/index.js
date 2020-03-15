import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './module/rootRecucer';
import rootSaga from './module/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

let enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
