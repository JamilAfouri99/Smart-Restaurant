import MenuBody from '../Home/Body/MenuBody/MenuBody'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import classes from './Menu.module.css'

const Menu=()=>{
    let MenuData = <h1>MENU</h1>
    return (
        <div className={classes.Menu}>
            <Header Header={classes.MenuHeader} Container={classes.backContainer} TypingBox={classes.MenuTypingBox} data={MenuData} />
            <div className='container pt-4'>
                <div className='row m-2' style={{paddingTop:'0rem'}}>
                    <MenuBody/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu