import classes from './Home.module.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import React,{useState} from 'react'

const Home=()=>{
    let Data=<h1>A Fascinating <br />Flavour Experience</h1>
    return(
        <div className={classes.Home}>
            <Header Header={classes.BodyHeader} Container={classes.backContainer}  TypingBox={classes.HomeTypingBox} data={Data}/> 
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home