import classes from './NavBar.module.css'
import React, { useState,useEffect,useContext } from 'react'
import { Link,NavLink,useHistory } from 'react-router-dom';
import Authentication from '../../../../Support/auth-context';

const NavBar = () => {
  const authCtx = useContext(Authentication)
  const history = useHistory()
  const [isLight, setIsLight] = useState(true);
  const [isShow, setIsShow] = useState(false);
  
  const handleShow=()=>{
    setIsShow(!isShow)
  }
  const handleLogout=()=>{
    authCtx.logout()
    history.replace('/auth');
  }
  useEffect(()=>{
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 120) {
        setIsLight(false)
      } else {
        setIsLight(true)
      }
    });
  },[])
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
                  {authCtx.isLogedIn ?<li>
                    <i className="fas fa-chevron-circle-down"></i>
                    <div className={classes.dropInfo}>
                      <ul className="d-flex flex-column pt-4">
                        <li>
                          <i className="fas fa-user-circle"></i>
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                          <i className="fas fa-sign-out-alt"></i>
                          <button className={classes.LogoutBtn} onClick={handleLogout}><a>Logout</a></button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  :<li>
                    <NavLink className="p-0" activeClassName={classes.active} to="/auth" title="Login"><i className="fas fa-sign-in-alt"></i></NavLink>
                    </li>
                  }
                      
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
                {!authCtx.isLogedIn && <li><NavLink activeClassName={classes.active} to="/auth">Login</NavLink></li>}
                {authCtx.isLogedIn && <li><a onClick={handleLogout} className={classes.LogoutBtn}>Logout</a></li>}
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar