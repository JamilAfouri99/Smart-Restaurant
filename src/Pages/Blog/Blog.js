import SocialBody from '../Home/Body/SocialBody/SocialBody'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import classes from './Blog.module.css'

const Blog=()=>{
    let BlogData = <h1>BLOG</h1>
    return(
        <div className={classes.Blog}>
            <Header Header={classes.BlogHeader} Container={classes.backContainer} TypingBox={classes.BlogTypingBox} data={BlogData} />
            <div className='container pt-4'>
                <SocialBody/>
            </div>
            <Footer />
        </div>
    )
}

export default Blog