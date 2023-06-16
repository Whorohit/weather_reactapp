import React from 'react'
import {Link} from 'react-router-dom'

export default function tempapp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  text-dark  fw-bolder" >
        <div className="container-fluid  ">
          <Link className="navbar-brand fs-4 text-dark" to="/">Cloudwhere</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ">
              <li className="nav-item active mx-3"> <Link className="nav-link  text-dark" to="/forecast">Forecast </Link> </li>
              <li className="nav-item mx-3"><Link className="nav-link  text-dark" to="/history">Historical Weather </Link></li>
              <li className="nav-item mx-3"><Link className="nav-link  text-dark" to="/">Realtime weather</Link></li>

            </ul>
            <ul className="navbar-nav ms-auto c">
              <li className="nav-item mx-3"><Link className="nav-link  text-dark" to="/airquality">Air Quality</Link></li>
          

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
