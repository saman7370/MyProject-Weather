import React, { useEffect, useState } from "react";
import PersianDate from "./PersianDate";
import {useDispatch, useSelector} from 'react-redux';
import { SendWeatherRequest } from "./Redux/Weather/WeatherAction";
// import getWeatherInfo from "./Redux/Weather/WeatherAction";

const Weather = ()=>{
    const {loading , data , error} = useSelector(state=>state);
    const dispatch = useDispatch();
    const[backMode , setBackMode] = useState('usual');
    const[query , setQuery] = useState('')

    const handleGetWeather = (e)=>{
        e.preventDefault()
        // dispatch(getWeatherInfo(query))
        dispatch(SendWeatherRequest(query))
        setQuery('')
    }

    useEffect(() => {
        if(!data.main){
            return 
        }

        let temp = data.main.temp 
        if(temp < 12) {
            setBackMode('cold')
        }else if (temp < 23){
            setBackMode('usual')
        }else{
            setBackMode('warm')
        }  
    }, [data]);

    return(
        <div className={`app pt-4 container-fluid back_${backMode}`}>
            {/* search_input  */}
            <div className="row justify-content-center py-3 pt-4">
                <div className="col-10 col-md-6 col-lg-4 col-xl-3">
                    <form onSubmit={handleGetWeather}>
                        <input type="text" className="search_input w-100" placeholder={data.name || "نام شهر یا کشور"}
                        value={query} onChange={(e)=> setQuery(e.target.value)}></input>
                    </form>
                </div>
            </div>
            {/* show date and clock */}
            <div className="row justify-content-center py-3 pt-4">
                <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                    <h3 className="text-center text_color">

                       <PersianDate/>

                    </h3>
                </div>
            </div>


            {/* show deg */}
            {loading ? (
                <div className="text-center text-secondary mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading ...</span>
                    </div>
                </div>
            ) : data.main ? (
                <>
                <div className="row justify-content-center py-3">
                    <div className="col-9 col-md-6 col-lg-4 col-xl-3">
                       <div className="deg_box pt-3">
                           <span>{Math.round(data.main.temp)}</span> °C  
                       </div>
                    </div>
                </div>
             {/* weather */}
                <div className="row justify-content-center py-3 pt-4">
                    <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                        <h1 className="text-center fa-3x lathin_text">{data.weather[0].main}</h1>
                    </div>
                </div>
                </>
            ) : error ? (
                <h3 className="text-center text-error">نام شهر یا کشور را به درستی وارد کنید</h3>
            ) : (
                <h3 className="text-center text-error">مکان مورد نظر را جستجو کنید</h3>
            )}
        </div>
    )
}

export default Weather;