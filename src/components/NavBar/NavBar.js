import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import {
  Nav,
  NavLogoLink,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarItems';
import { MenuItems } from './NavList';

export default function NavBar(){
    const [hidden, setHidden] = useState(false);
  return (
    <>
      <Nav>
        <NavLogoLink style={{fontSize:32}} to='/'>
            Conceilax
        </NavLogoLink>
        <div className="menu-icon">
        <i
            onClick={() => setHidden(true)}
            className={hidden ? "fas fa-bars hidden" : "fas fa-bars"}
          ></i>
          <i
            onClick={() => setHidden(false)}
            className={hidden ? "fas fa-times" : "fas fa-times hidden"}
          ></i>
        </div>
        <ul className={hidden ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link onClick={() => setHidden(false)} className={item.cName} to={item.to}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>|
          <NavLink to='/website-exmaples' activeStyle>
            Examples
          </NavLink>|
          <NavLink to='/about' activeStyle>
            About
          </NavLink>|
          <NavLink to='/services' activeStyle>
          Services
          </NavLink>|
          <NavLink to='/contact-us' activeStyle>
          Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/services'>Learn More</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
