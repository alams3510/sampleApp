import React from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 border-bottom sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand h1" href="#">My <span className='text-primary'>Brand</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Seo</a></li>
            <li><a className="dropdown-item" href="#"> Web Development</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">App Developement</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Nav