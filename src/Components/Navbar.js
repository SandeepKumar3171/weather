import {TiWeatherPartlySunny} from 'react-icons/ti'

const Navbar=({NavCityName})=>{
  
  const cityList=[
    {id:'1',title:'Gorakhpur'},
    {id:'2',title:'Delhi'},
    {id:'3',title:'Mumbai'},
    {id:'4',title:'Noida'},
    {id:'5',title:'Jhansi'},
    {id:'6',title:'Kerala'}
]

const ClickHandler=(event)=>{
 // console.log(event.target.value)
  NavCityName(event.target.value)
}
console.log()


    return(<>
      <div className="flex flex-row justify-center text-white bg-transparent shadow-md shadow-slate-800 w-full">
          <p className='flex items-center text-4xl text-[#ff7300] '><TiWeatherPartlySunny className='text-center'/></p>
          <p className="text-3xl font-bold p-4">Weather Forecast</p> 
      </div>
      <div className='md:text-xl text-xs font-semibold flex flex-row  justify-around gap-2 md:p-2 pt-2 pb-2 pl-1 pr-1 text-white ' >
        {cityList.map(city=>(
          <button key={city.id} className='hover:text-red-600 hover:underline' value={city.title} onClick={ClickHandler}>{city.title}</button>
        ))}
      </div>

  
    </>)
}

export default Navbar;