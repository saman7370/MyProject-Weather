import React from "react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Weather from "./Weather";

const App = ()=>{
    return(
        <Provider store={Store}>
        <div>
               <Weather/>
        </div>
        </Provider>
    )
}

export default App;