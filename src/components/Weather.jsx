import React, { useState } from "react";
import PersianDate from "./PersianDate";

const Weather = ()=>{
    const[backMode , setBackMode] = useState('cold')

    return(
        <div className={`app pt-4 container-fluid back_${backMode}`}>
            {/* search_input  */}
            <div className="row justify-content-center py-3 pt-4">
                <div className="col-10 col-md-6 col-lg-4 col-xl-3">
                    <form>
                        <input type="text" className="search_input w-100" placeholder={"نام شهر یا کشور"}></input>
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
            <div className="row justify-content-center py-3">
                <div className="col-9 col-md-6 col-lg-4 col-xl-3">
                    <div className="deg_box pt-3">
                    <span className="Beyekan">15</span> °C  
                    </div>
                </div>
            </div>
            {/* weather */}
            <div className="row justify-content-center py-3 pt-4">
                <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                    <h1 className="text-center fa-3x lathin_text"><i className="fas fa-cloud"></i>Cloudy</h1>
                </div>
            </div>
           



        </div>
    )

}

export default Weather;