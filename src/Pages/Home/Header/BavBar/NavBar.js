import classes from './NavBar.module.css'
import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isLight, setIsLight] = useState(true);
  const [isShow, setIsShow] = useState(false);
  
  const handleShow=()=>{
    setIsShow(!isShow)
  }
  useEffect(()=>{
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 120) {
        setIsLight(false)
      } else {
        setIsLight(true)
      }
    });
  },[window.scrollY])
  return (
    <>
      <nav className={isLight ? classes.bgLight : classes.bgDark}>
        <div className="container d-flex justify-content-between">
          <div className={classes.Logo}>
            <NavLink to="/home">SMART RESTAURANT</NavLink>
          </div>
          <div className={classes.Links}>
              <ul>
                  <li><NavLink activeClassName={classes.active} to="/home">HOME</NavLink></li>
                  <li><NavLink activeClassName={classes.active} to="/aboutus">ABOUT US</NavLink></li>
                  <li><NavLink activeClassName={classes.active} to="/menu">MENU</NavLink></li>
                  <li><NavLink activeClassName={classes.active} to="/blog">BLOG</NavLink></li>
                  <li><NavLink activeClassName={classes.active} to="/shop">SHOP</NavLink></li>
                  <li><NavLink activeClassName={classes.active} to="/contactus">CONTACT US</NavLink></li>
              </ul>
            </div>
          <div className={classes.dropList}>
            <i className="fas fa-stream" onClick={handleShow}></i>
          </div>
        </div>
        <div className={`${isShow?classes.ThrowList:classes.hiddenThrowList} d-flex flex-column justify-content-start`}>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/home">HOME</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/aboutus">ABOUT US</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/menu">MENU</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/blog">BLOG</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/shop">SHOP</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/contactus">CONTACT US</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar