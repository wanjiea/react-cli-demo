
//redux核心层
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  //引入redux-saga中间件 来做到异步修改
import { watchIncrementAsync } from '../sagas/index'
import reducer from '../reducers';

//持久化存储
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducer);
const store = createStore(myPersistReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchIncrementAsync);

export const persistor = persistStore(store);
export default store;