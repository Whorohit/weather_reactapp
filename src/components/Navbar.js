import React from 'react'
import { Link } from 'react-router-dom'
import { FaSun } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
export default function tempapp({mode,togglemode}) {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-dark ${mode?"text-dark":"text-light"}`}>
        <div class="container-fluid">
          <Link class={`navbar-brand  ${ mode?"text-dark":"text-light"} fw-bolder  ` } to="/">CloudWhere</Link>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">

            <IoMdMenu className='navbar-toggler-icon' color='grey' />
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active"> <Link class={`nav-link ${ mode?"text-dark":"text-light"} `} to="/forecast">Forecast</Link> </li>
              <li class="nav-item"><Link class={`nav-link ${ mode?"text-dark":"text-light"} `} to="/history">History</Link></li>
              <li class="nav-item"><Link class={`nav-link ${ mode?"text-dark":"text-light"} `} to="/">Realtime</Link></li>
              <li class="nav-item"><Link class={`nav-link ${ mode?"text-dark":"text-light"} `} to="/airquality">Air quality</Link></li>
              <li class="nav-item d-flex  justify-content-md-center align-items-center mx-md-2 gap-2 " onClick={togglemode}><FaSun className='d-none d-md-block' color='grey'/> Dark Mode</li>

            </ul>

          </div>
          
        </div>

      </nav>

    </>
  )
}
