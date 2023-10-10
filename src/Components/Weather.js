import React from "react";
import { BsFillSunriseFill,BsFillSunsetFill,BsFillDropletFill,BsFillCloudsFill,BsFillEyeFill } from 'react-icons/bs';
import {MdAir} from 'react-icons/md';
import {FaTemperatureHigh,FaTemperatureLow} from 'react-icons/fa';


const Weather=({title,countryCode,tempature,description,icon,sunrise,sunset,humidity,cloud,visibility,wind,maximum,minimum})=>{

    
    return(
    <div>
         <div className="flex flex-col items-center font-semibold text-center pb-2">
          <p className="text-4xl">{title}</p>
          <p>{countryCode}</p>
          <p>{tempature}&deg;C</p>
          <p>{description}</p>
          <img className="mt-[-15px]" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
          <p>gfhdh</p>
          </div> 
          

          <div className="text-sm md:text-lg md:font-semibold pb-5">
          <div className="flex flex-row md:gap-5 gap-3 justify-center mt-[-8px]">
            <p className="flex flex-row gap-1">
                <span className="text-2xl"><BsFillSunriseFill/></span>
                <span>Sunrise - {sunrise}</span></p>
                <p className="flex flex-row gap-1">
                <span className="text-2xl"><BsFillSunsetFill/></span>
                <span>Sunset - {sunset}</span></p>
          </div>

          <div className="flex flex-row md:gap-5 gap-4 pb-2 justify-center">
            <p className="flex flex-row gap-2 items-center">
                <span className="text-xl"><BsFillDropletFill/></span>
                <span>Humidity - {humidity}%</span></p>
                <p className="flex flex-row gap-2">
                <span className="text-2xl"><BsFillCloudsFill/></span>
                <span>Cloud - {cloud}%</span></p>
          </div>

          <div className="flex flex-row md:gap-5 gap-4  pb-2 justify-center">
            <p className="flex flex-row gap-2">
                <span className="text-xl"><BsFillEyeFill/></span>
                <span>Visibility - {visibility}</span></p>
                <p className="flex flex-row gap-2">
                <span className="text-xl"><MdAir/></span>
                <span>Wind - {wind}</span></p>
          </div>

          <div className="flex flex-row md:gap-5 gap-4 justify-center">
            <p className="flex flex-row gap-2">
                <span className="text-xl"><FaTemperatureHigh/></span>
                <span className="flex flex-row gap-2"> <span className="md:flex hidden">Maximum Temp.- </span>  {maximum}&deg;C</span></p>
                <p className="flex flex-row gap-2">
                <span className="text-xl"><FaTemperatureLow/></span>
                <span className="flex flex-row gap-2"><span className="md:flex hidden">Maximum Temp.- </span>{minimum}&deg;C</span></p>
          </div>
 
          </div>
    
    </div>)
}

export default Weather;