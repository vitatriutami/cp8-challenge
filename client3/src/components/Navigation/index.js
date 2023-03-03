import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import "./style.css"


function Navigation(props) {
  return (
    <div>
      <Navbar className='bg-dark'>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Video-Game-Controller-Icon.svg"
            style={{
              height: 40,
              width: 40
            }}
          />
          <span className='appname'>Playergame</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navigation;