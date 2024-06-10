import React, { useState, useEffect } from 'react'


export default function Home() {

  const [current, setCurrent] = useState({})
  const [location, setLocation] = useState({})
  const [city, setCity] = useState('London')
  useEffect(() => {
    try {

      fetch(`https://api.weatherapi.com/v1/current.json?key=3215b3263645467f91c100950232905&q=${city}`)
        .then(res => res.json())
        .then(data => {
          setCurrent(data.current)
          setLocation(data.location)
          console.log(data.location)
        })
    } catch (error) {

    }

  }
    , [])
  const handleonchange = (event) => {
    setCity(event.target.value)
  }
  const click = () => {
    try {

      fetch(`https://api.weatherapi.com/v1/current.json?key=3215b3263645467f91c100950232905&q=${city}`)
        .then(res => res.json())
        .then(data => {
          setCurrent(data.current)
          setLocation(data.location)
          console.log(data.location)
        })
    } catch (error) {

    }
  }
  return (
    <>
      <div className="input-group mb-3 w-50 mx-auto my-5">
        <input type="text" className="form-control  opacity-75 mx-1" placeholder="City or Region Name" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleonchange} defaultValue={city} />
        <div className="input-group-append">
          <button className="  fw-bold btn btn-outline-secondary   opacity-75" type="button" onClick={click}  >Search</button>
        </div>
      </div>
      <div className="container  mx-auto text-light  px-5 py-5  my-5 main rounded " style={{ width: '60vw' }}>
        <h3 className='fs-2 fw-bold  mx-auto border-2  text-center border-bottom  pb-3'>Realtime Weather </h3>
        <div class="row  mt-5 mb-1 ">
          <div class="col-md-6 my-2 m ">
            <div class="card   mx-auto  c" style={{ backgroundColor: '#528eb0' }}>
              <div class="card-body imgbox">
                <h5 class="card-title text-center  border-bottom border-2 mt-2 pb-3 temp mx-auto fw-bold">Temperature</h5>
                <div className="imgabove d-flex justify-content-around  my-3 ">
                  <h4 className="smallimg">
                    last updated on:
                  </h4>
                  <h3 className="smallimg">
                    {current.last_updated}
                  </h3>
                </div>
                <div className=" fw-bold my-1">
                  <h3 className='cityname fw-bolder text-center '> {city}</h3>
                  <h3 className='sit  fw-bolder text-center '>{location.country}</h3>
                </div>
                <div class='box'>
                  <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
                </div>
                <div className='imgbelow d-flex justify-content-around  my-3 fw-bold'>
                  <h4 className="imgbline fw-bold">
                    Temp <span className='fw-bold'>(&#8451;)</span>
                  </h4>
                  <h4 className="imgbline fw-bold">
                    Temp<span className="fw-bold">(&#8457;)</span>
                  </h4>
                </div>
                <div className='imgbelow d-flex justify-content-around  my-3 fw-bold'>
                  <h4 className="imgbline fw-bold">
                    {current.temp_c}  <span className='fw-bold'>&#8451;</span>
                  </h4>
                  <h4 className="imgbline fw-bold">
                    {current.temp_f} <span className="fw-bold">&#8457;</span>
                  </h4>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-6  my-2  m  ">
            <div class="card  mx-auto    " style={{ backgroundColor: '#528eb0' }}>
              <div class="card-body">
                <h5 class="card-title temp text-center border-bottom border-2 mt-2 pb-3 w-75 mx-auto fw-bold">Others Conditions</h5>
                <p class="card-text  condition   ">Cloud(%)................................{current.cloud} </p>
                <p class="card-text condition  ">Feellike(&#8451;)..........................{current.feelslike_c} &#8451; </p>
                <p class="card-text condition   ">Humidity.............................{current.humidity}%</p>
                <p class="card-text condition   ">Precipitation(inch) ................{current.precip_in}</p>
                <p class="card-text condition   ">Precipitation(cm) ..................{current.precip_mm
                }</p>
                <p class="card-text condition   ">Wind(kmp)................................{current.wind_kph}</p>
                <p class="card-text condition   ">Wind(mph)................................{current.wind_mph}</p>
                <p class="card-text condition   ">Wind degree.........................{current.wind_degree}</p>
                <p class="card-text condition   ">Wind Direction......................{current.wind_dir}</p>
                <p class="card-text condition ">Visibility(miles)..................... {current.vis_miles}</p>
                <p class="card-text condition ">Visibility(km)...................{current.vis_km}</p>
                {/* <p class="card-text condition ">Pressure(in)................................{current.pressure_in}</p> */}



              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
