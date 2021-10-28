import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import classes from './AboutUs.module.css'

const AboutUs = () => {
    let AboutUsData = <h1>ABOUT US</h1>
    return (
        <div className={classes.AboutUs}>
            <Header Header={classes.AboutUsHeader} Container={classes.backContainer} TypingBox={classes.AboutUsTypingBox} data={AboutUsData} />
            <div className='container pt-4'>
                <div className='row m-4' style={{paddingTop:'4rem'}}>
                    <div className='col-md-6 col-sm-12'>
                        <h2>You have to begin to tell the story of your life as you now want it to be and discontinue the tales.</h2><br/>
                        <p>Deployment long tail monetization strategy equity basic of team of conversion. Supply chain freemium investor long tail agile wrokers prototype validation influencer market share.</p><br/>
                        <p> Client social proof funding innovator. First mover advantage business -to-consumer customer vesting period premium term sheet venture rate learning curve for startups in valley for life.</p><br/>
                        <p>Funding innovator always irst mover advantage business-to-consumer customer vesting period freemium termsheet venture rate learning .curve focused drive for success.</p><br/><br/>
                        <div><img src="https://webify-13e95.kxcdn.com/demo/webify/restaurant/wp-content/uploads/sites/10/2019/04/Chris_Hemsworth_Signature-1.png" alt="img"></img></div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12'>
                        <img src="https://webify-13e95.kxcdn.com/demo/webify/restaurant/wp-content/uploads/sites/10/2019/04/123511_thumb.png" title="123511_thumb" alt="123511_thumb" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs