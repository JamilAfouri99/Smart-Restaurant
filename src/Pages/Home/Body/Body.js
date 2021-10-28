import classes from './Body.module.css'
import GalleryBody from './GalleryBody/GalleryBody'
import InfoBody from './InfoBody/InfoBody'
import MenuBody from './MenuBody/MenuBody'
import NumBody from './NumBody/NumBody'
import SocialBody from './SocialBody/SocialBody'
import TeamBody from './TeamBody/TeamBody'

const Body=()=>{
    return(
        <div className={classes.Body}>
            <MenuBody/>
            <InfoBody/>
            <GalleryBody/>
            <TeamBody/>
            <NumBody/>
            <SocialBody/>
        </div>
    )
}

export default Body