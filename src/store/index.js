
//redux核心层
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  //引入redux-saga中间件 来做到异步修改
import { watchIncrementAsync } from '../sagas/index'
import incrementReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrementAsync);

export default store;