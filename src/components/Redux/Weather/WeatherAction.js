import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./WeatherType";
import axios from 'axios';

export const SendWeatherRequest = ()=>{
    return{
        type: SEND_WEATHER_REQUEST
    }   
}

export const ReceiveWeatherResponse= (data)=>{
    return{
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }   
}

export const ReceiveWeatherError = (data)=>{
    return{
        type: RECEIVE_WEATHER_ERROR,
        payload: data
    }   
}

const getWeatherInfo = (query)=>{
    return (dispatch)=>{
        dispatch(SendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=e5f09cc768404dca43699ffb6fada7bc`).then(res=>{
            dispatch(ReceiveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(ReceiveWeatherError(error.message))
        })
    }
}

export default getWeatherInfo;