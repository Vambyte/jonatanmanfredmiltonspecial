import React, {useRef} from 'react'

import "../../styles/Components.scss"

import logo from "../../logo.png"

import { useNavigate } from 'react-router-dom'

export default function ExternalHeader() {

  const navigate = useNavigate();

  const hamburger_side_menu = useRef();

  function login() {
    navigate("/login");
  }

  function openHamburgerMenu(){
    const hamburger_side_menu_temp = hamburger_side_menu.current;
    if(hamburger_side_menu_temp.classList.contains('show-hamburger-menu')){
      hamburger_side_menu_temp.className = '';
        return;
    }
    hamburger_side_menu_temp.className = 'show-hamburger-menu';
  }

  function ChangeToDarkMode(){
    if(document.body.classList.contains('dark-mode')){
      document.body.classList.remove('dark-mode');
      return;
    }
    document.body.classList.add('dark-mode');
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
          <button className="hamburger-menu" onClick={openHamburgerMenu}><img src="../../../public/hamburger_menu.png" alt="hamburger_menu" /></button>
        </span>
        <section id="hamburger-side-menu" ref={hamburger_side_menu}>
          <button onClick={ChangeToDarkMode}>Dark-mode On/Off</button>
          <p>Måste nog fixa till denna lite granna</p>
        </section>
      </header>
    </div>
  )
}
