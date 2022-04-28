import WeatherReducer from "./Weather/WeatherReducer";
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const Store = createStore(WeatherReducer , composeWithDevTools(applyMiddleware(thunk)))

export default Store;