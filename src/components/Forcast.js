import React, { useEffect, useState, useRef } from 'react'
import './css/forcast.css'


export default function Forcast() {
  const [icon, setIcon] = useState('')
  const [current, setCurrent] = useState({})
  const [city, setCity] = useState('Kolkata ')
  const inputcity = useRef(null);
  const [location, setLocation] = useState({})
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=3215b3263645467f91c100950232905&q=${city}&days=7`)
      .then(res => res.json())
      .then(data => {
        setCurrent(data.current)
        setLocation(data.location)
        setForecast(data.forecast.forecastday)
        setIcon(data.current.condition.icon)
        console.log(data.forecast.forecastday)
      })

  }, [])

  const click = () => {
    setCity(inputcity.current.value)
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=3215b3263645467f91c100950232905&q=${city}&days=7`)
    .then(res => res.json())
    .then(data => {
      setCurrent(data.current)
      setLocation(data.location)
      setForecast(data.forecast.forecastday)
      setIcon(data.current.condition.icon)
      console.log(data.forecast.forecastday)
    })
  }


  return (
    <>
      <div className="input-group mb-3 w-50 mx-auto my-5">
        <input type="text" className="form-control  opacity-75 mx-1" ref={inputcity} placeholder="City or Region Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="  fw-bold btn btn-outline-secondary   opacity-75" type="button" onClick={click} >Search</button>
        </div>
      </div>
      <div className="container  mx-auto text-light  px-5 py-5  my-5 main rounded " style={{ width: '60vw' }}>
        <div class="row  text-center">
          <div class="col-md-6 my-2 ">
            <div class="card" style={{ backgroundColor: '#528eb0' }}>
              <div class="card-body " >
                <h5 class="cardboxtitle border-2  fw-bold border-bottom">Current Weather </h5>
                <h3 className='forcast_cityname fw-bold' >{city}</h3>
                <h3 className='forcast_country fw-bold'>{location.country? location.country:"undefined"}</h3>
                <div className='forcast_current_img text-center'>
                  <img src={icon?icon:'//cdn.weatherapi.com/weather/64x64/day/116.png'} alt="" />
                </div>
                <div className="container    d-flex justify-content-around ">
                  <h4 className="current_temp fw-bold">
                    {current.temp_c} <span className='fw-bold'>(&#8451;)</span>
                  </h4>
                  <h4 className="current_temp fw-bold">
                  {current.temp_f}<span className="fw-bold">(&#8457;)</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 my-2  " > <div class="card" style={{ backgroundColor: '#528eb0' }}>
            <div class="card-body" >
              <h5 class="cardboxtitle border-2  fw-bold border-bottom">Other conditions</h5>
              <h5 className="other_conditions  mt-3">Cloud(%)............{current.cloud}%</h5>
              <h5 className="other_conditions ">Wind Speed........{current.wind_mph}kph / {current.wind_degree}&deg;</h5>
              <h5 className="other_conditions">Wind Direction...........{current.wind_dir}</h5>
              <h5 className="other_conditions">Humidity................{current.humidity}</h5>
              <h5 className="other_conditions">Precipitation..........{current.precip_in}inch</h5>
              <h5 className="other_conditions">Visibility...............{current.vis_km}km</h5>
              <h5 className="other_conditions">Feellike.................{current.feelslike_c}&#8451;</h5>
            </div>
          </div></div>
        </div>
        <div className="container otherdays d-flex justify-content-center">
{
  forecast.map(d=>{
    let img=d.day.condition.icon
    console.log(img)
     return <div className="other border-end border-2  ">
       <h4 className='date_otherDays fw-bold  '>{d.date}</h4>
       <h4 className='text_otherDays fw-bold  '>{d.day.condition.text}</h4>
       <div className='otherdays_img text-center'>
        <img src={`${img}`} alt=""  style={{width:'7rem'}} />
       </div>
       <h3 className="other_temp_c my-2">{d.day.maxtemp_c}&#8451;  --  {d.day.mintemp_c}&#8451;</h3>
       <h3 className="other_temp_c my-2">{d.day.maxtemp_f}&#8457;  --  {d.day.mintemp_f}&#8457;</h3>
      
    </div>
  })
}
        </div>
      </div>


    </>

  )
}
