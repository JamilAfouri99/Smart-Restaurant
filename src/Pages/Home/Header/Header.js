import NavBar from './BavBar/NavBar'
import React, { useState } from 'react'
import classes from './Header.module.css'
import video from '../../../assets/backvideo.mp4'
const Header = (props) => {

    return (
        <div className={props.Header}>
            <NavBar />
            {props.alert!=undefined&&<div className={classes.loading}>
                <video autoPlay muted loop id="myVideo" className={classes.bgvideo}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>}
            <div className={`container d-flex justify-content-center align-items-center ${props.Container}`}>
                <div className={`${props.TypingBox}`}>
                    {props.data}
                </div>
            </div>
        </div>
    )
}

export default Header
