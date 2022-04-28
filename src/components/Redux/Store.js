import WeatherReducer from "./Weather/WeatherReducer";
import {createStore , applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "./Weather/WeatherSaga";

const sagaMiddleware = createSagaMiddleware()


const Store = createStore(WeatherReducer , composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)

export default Store;