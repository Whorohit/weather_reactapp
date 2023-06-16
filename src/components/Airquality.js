
import React,{useRef,useState,useEffect} from 'react'
import  './css/airquality.css'


export default function Airquality() {
  const [city, setCity] = useState('kolkata')
  const [location, setLocation] = useState({})
  const [airquality, setAirquality] = useState({})
  const inputcity = useRef(null);
  
  const airfetch=()=>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=3215b3263645467f91c100950232905&q=${city}&days=7&aqi=yes`)
    .then(res => res.json())
    .then(data => {
      setAirquality(data.current.air_quality)
      setLocation(data.location)
     console.log(data.current.air_quality)
     console.log(location.name)
    })
  }
  useEffect(() => {
    airfetch();
    
  }, [])
  const click=()=>{
    setCity(inputcity.current.value);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=3215b3263645467f91c100950232905&q=${city}&days=7&aqi=yes`)
    .then(res => res.json())
    .then(data => {
      setAirquality(data.current.air_quality)
      setLocation(data.location)
     
    })
}
  
    
  return (
    
    <>
    <div className="input-group mb-3 w-50 mx-auto my-5">
        <input type="text" className="form-control  opacity-75 mx-1" placeholder="City or Region Name" ref={inputcity} aria-label="Recipient's username" aria-describedby="basic-addon2"  />
        <div className="input-group-append">
          <button className="  fw-bold btn btn-outline-secondary   opacity-75" type="button" onClick={click}   >Search</button>
        </div>
      </div>
      <div className="container  mx-auto text-light  px-5 py-5  my-5 main rounded " style={{ width: '60vw' }}>
      <div class="card rounded airbox" style={{width:'30vw',margin:'2rem auto',backgroundColor: '#528eb0'}}>
      <div class="card-body  " >
        <h3 className="heading_air border-bottom border-2" >Air Quality</h3>
        <h5 class="card-title text-center air_cityname">{location.name}</h5>
        <h5 className='air_countryname fw-bold'>{location.country}</h5>
        <p class="card-text airline  text-center my-1">CO .................................{Number(airquality.co).toFixed(2)}</p>
        <p class="card-text airline  text-center my-1">NO <sup>2</sup> .................................{Number(airquality.no2).toFixed(2)}</p>
        <p class="card-text airline text-center my-1">O<sup>3</sup> .................................{Number(airquality.o3).toFixed(2)}</p>
        <p class="card-text airline text-center my-1 ">SO<sup>2</sup> .................................{Number(airquality.so2).toFixed(2)}</p>
        <p class="card-text airline text-center my-1">PM2.5 .................................{Number(airquality.pm2_5).toFixed(2)}</p>
        <p class="card-text airline text-center my-1">PM10 .................................{Number(airquality.pm10).toFixed(2)}</p>
        
      </div>
    </div>
      </div>
    </>
  )
}
