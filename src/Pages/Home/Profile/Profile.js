import Header from '../Header/Header'
import classes from './Profile.module.css'
import Authentication from '../../../Support/auth-context'
import React,{useContext} from 'react'
const Profile=()=>{
    const authCtx=useContext(Authentication)
    const ProfileData=<div>
        <h1>MY PROFILE</h1><br/>
        <h3>Email: {authCtx.email}</h3>
    </div>
    return(
        <>
        <Header Header={classes.ProfileHeader} Container={classes.backContainer} TypingBox={classes.ProfileTypingBox} data={ProfileData}/>
        </>
    )
}
export default Profile