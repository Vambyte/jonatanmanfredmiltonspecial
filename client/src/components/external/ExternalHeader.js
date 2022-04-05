import React from 'react'

import "../../styles/Components.scss"

import logo from "../../logo.png"

import { useNavigate } from 'react-router-dom'

export default function ExternalHeader() {

  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <div className="ExternalHeader">
      <header>
        <span>
          <h1>Aktielabbet</h1>
        </span>
        <span>
          <nav>
            <ul className="nav__links">
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </span>
        <span>
          <a className="cta" href="#"><button onClick={login}>Login</button></a>
        </span>
      </header>
      </div>
  )
}
