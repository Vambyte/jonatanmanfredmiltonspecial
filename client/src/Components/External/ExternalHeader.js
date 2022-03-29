import React from 'react'

import '../../ComponentStyle/ExternalHeader.css'

export default function ExternalHeader() {
  return (
    <>
      <header>
        <h1>Aktier</h1>
        <nav>
          <ul class="nav__links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <a className="cta" href="#"><button>Contact</button></a>
      </header>
    </>
  )
}
