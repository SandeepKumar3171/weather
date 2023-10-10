import axios from "axios";
import React, { useEffect, useState } from "react";

const Forecast=({lat,long})=>{
    const [forecastData,setForecastData]=useState([])
    
useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=93922b9266a0ebe49ede55c9803de6f6`;
    axios.get(url).then(response=>{
        setForecastData(response.data.list)
    }).catch(err=>{
        console.log(err)
    })

},[lat,long])

 
    return(<>
    
    <div>
        <p className="text-2xl text-white bg-slate-600 font-semibold text-center mt-1 p-2">UPCOMING FORECAST</p>

        <div className="grid md:grid-cols-10 grid-cols-4 text-center gap-1 p-1">
            {forecastData.map(item =>(
                <div key={Math.random()} className="border border-black bg-slate-600 rounded-md shadow-md shadow-gray-800 text-white grid-row-12">
                    <p >{item.dt_txt.split(" ")[0]}</p>
                    <p>{item.dt_txt.split(" ")[1]}</p>
                    <div className="flex justify-center"> <img className="" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="forcast-icon" /></div>
                <p>{item.weather[0].description}</p>
                <p>{Math.floor(item.main.temp/10)}&deg;C</p>
                </div>
            ))}
        </div>
    </div>
   
    </>)

}

export default Forecast;