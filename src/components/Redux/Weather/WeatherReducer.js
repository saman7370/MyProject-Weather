import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./WeatherType";


const init = {
    loading: false,
    data:{},
    error:''
}

const WeatherReducer = (state = init , action)=>{
    switch (action.type) {
        case SEND_WEATHER_REQUEST:
            return{...state , loading: true}
        case RECEIVE_WEATHER_RESPONSE:
            return{loading: false , data:action.payload , error:''}
        case RECEIVE_WEATHER_ERROR:
            return{loading: false , data:{} , error:action.payload}
            
           
    
        default:
            return state
    }
}

export default WeatherReducer;