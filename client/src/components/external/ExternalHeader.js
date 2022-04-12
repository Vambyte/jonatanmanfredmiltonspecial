import React, {useRef} from 'react'

import "../../styles/Components.scss"

import hamburger_menu_img from "../../hamburger_menu.png";
import logo from "../../logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons'
//import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom'

export default function ExternalHeader() {

  const navigate = useNavigate();

  const hamburger_side_menu = useRef();

  function login() {
    navigate("/login");
  }

  function profile() {
    navigate("/profile");
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
          <button className="cta" onClick={login}>Login</button>
          <button className="hamburger-menu" onClick={openHamburgerMenu}><img src={hamburger_menu_img} alt="hamburger_menu" /></button>
        </span>
        <section id="hamburger-side-menu" ref={hamburger_side_menu}>
          <span className="hamburger-side-menu-header">
            <button onClick={profile} className="hamburger-side-menu-icon-container"><FontAwesomeIcon className="hamburger-side-menu-icon" icon={faUser} /></button>
            <button onClick={ChangeToDarkMode} className="hamburger-side-menu-icon-container"><FontAwesomeIcon className="hamburger-side-menu-icon" icon={faLightbulb} /></button>
          </span>
          <p>Måste nog fixa till denna lite granna</p>
        </section>
      </header>
    </div>
  )
}
