import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Forecast from "./Components/Forecast";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import Weather from "./Components/Weather";
import Footer from "./Components/Footer";


function App() {
  const[city,setCity]=useState("Kolkata");
  const [Data,setData]=useState([]);
  const[bg,setBg]=useState("")


     useEffect(()=>{
      const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93922b9266a0ebe49ede55c9803de6f6&units=metric`
      axios.get(apiUrl).then(response =>{
        setData(response.data)
        handlebg(response.data.weather[0].id)
      } 
      ).catch(err=>console.log(err))
     },[city])
     
     function handlebg(id){
      if( id >= 200  && id < 300){
       setBg("bg-[url('./Images/ThunderStorm.webp')]")
      }
     
      else if( id >= 300  && id < 600){
       setBg("bg-[url('./Images/Drizzle.webp')]")
      }
     
      else if( id >= 600  && id < 700){
       setBg("bg-[url('./Images/Snow.webp')]")
      }
     
      else if( id >= 700  && id < 800){
       setBg("bg-[url('./Images/haze1.webp')]")
      }
     
      else if( id >= 801 && id < 900){
       setBg("bg-[url('./Images/Clouds.webp')]")
      }
     
      else{
       setBg("bg-[url('./Images/clear.webp')]")
      }
          
     }
    
  return (
    <>

    {Data.length===0 ? (<div className="text-xl font-semibold flex flex-col justify-center items-center mt-[50vh]"><p>Loading....</p><p>please weait</p></div>) :
    <>
    <div className={`w-full bg-cover h-fit text-white ${bg}`}>
       
    <Navbar NavCityName={setCity}/>
    <SearchBar cityStateChanger={setCity}/>
    <Weather title={Data.name} countryCode={Data.sys.country} tempature={Data.main.temp} description={Data.weather[0].description} icon={Data.weather[0].icon} sunrise={new Date(Data.sys.sunrise*1000).toLocaleTimeString('en-US')} sunset={new Date(Data.sys.sunset*1000).toLocaleTimeString('en-US')} humidity={Data.main.humidity} cloud={Data.clouds.all} visibility={Data.visibility/1000}  wind={Data.wind.speed} maximum={Data.main.temp_max}  minimum={Data.main.temp_min} />
    
    
    </div>
    <Forecast  lat={Data.coord.lat} long={Data.coord.lon}/>
    <Footer />
   
    </>
    }
    
    
    </>

  );
}

export default App;
