import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'

const SearchBar=({cityStateChanger})=>{

    const[searchCityName,setSearchCityName]=useState("")
    
    const changeSearchCityNameHandlare=(event)=>{
        setSearchCityName(event.target.value)
    }

    const clickHandler=(event)=>{
        event.preventDefault()
        cityStateChanger(searchCityName)
        setSearchCityName('');
    }

    return(
        <>
        <div>
            <label className="flex justify-center p-5">
                <input className="border mt-5 md:p-2 p-1 w-[60%] md:w-[40%] rounded-l-xl bg-slate-100 shadow-md shadow-slate-700 text-black" type="search" onChange={changeSearchCityNameHandlare} value={searchCityName} />
                <p className="flex border-2 border-none text-center items-center md:h-12 h-10 p-5 mt-5 ml-[-2px] text-2xl cursor-pointer rounded-r-xl bg-blue-500 text-white hover:bg-blue-800 shadow-md shadow-slate-700" onClick={clickHandler}><BsSearch/></p>
                </label>
        </div>
        
        </>
    )
}
export default SearchBar;