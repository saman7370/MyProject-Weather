import { SEND_WEATHER_REQUEST } from "./WeatherType";
import { call, put, takeEvery } from 'redux-saga/effects';
import { ReceiveWeatherError, ReceiveWeatherResponse } from "./WeatherAction";
import axios from 'axios';

const getWeatherRequest = (query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=e5f09cc768404dca43699ffb6fada7bc`) 
}

function* handleGetWeather(action){
    try{
        const res = yield call(getWeatherRequest , action.payload)
        yield put(ReceiveWeatherResponse(res.data))

    }catch(error){
        yield put(ReceiveWeatherError(error.message))

    }
}

export function* watcherSaga(){
    yield takeEvery(SEND_WEATHER_REQUEST , handleGetWeather)
}