import NavBar from './BavBar/NavBar'
import React,{useState} from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={`${props.Header}`}>
            <NavBar/>
            <div className={`container d-flex justify-content-center align-items-center ${props.Container}`}>
                <div className={`${props.TypingBox}`}>
                    {props.data}
                </div>
            </div>
        </div>
    )
}

export default Header
