import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 pb-4'>
                        <h2 className='pb-4'>SMART RESTAURANT</h2>
                        <p className='pb-4'>Lorem ipsum dolor sit amet, elit. Aenean ligula eget dolor. Lorem ipsum dolor sit amet, consectetur to adipisicing elit.</p>
                        <div>
                            <ul className="nav flex-row d-flex">
                                <li className='p-3'>
                                    <a href="https://www.facebook.com/jamelhesham/" target="_self" className="social-fb"><i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className='p-3'>
                                    <a href="https://github.com/JamilAfouri99" target="_self" className="social-github"><i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className='p-3'>
                                    <a href="https://www.instagram.com/jamil_afouri/" target="_self" className="social-instagram">
                                    <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className='p-3'>
                                    <a href="https://www.linkedin.com/in/jamil-afouri-18041b191/" target="_self" className="social-linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4 pb-4'>
                        <h4 className='pb-4'>RECENT POSTS</h4>
                        <div className='row'>
                            <div className='col-12'>
                                <p>Delicious Hot Grilled Chicken Recipes</p>
                                <p className={classes.dates}>OCTOBER 4, 2018</p>
                            </div>
                            <div className='col-12'>
                                <p>Better Fed Than Red Whether Glories</p>
                                <p className={classes.dates}>OCTOBER 4, 2018</p>
                            </div>
                            <div className='col-12'>
                                <p>Trade Pastry Wrap To Coat Fish, Poultry</p>
                                <p className={classes.dates}>OCTOBER 4, 2018</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pb-4'>
                        <h4 className='pb-4'>CONTACT US</h4>
                        <div className='row'>
                            <div className='col-12 pb-4'>
                                <span className='p-2' style={{color:'#C59D5F'}}><i className="fas fa-phone-volume"></i></span>
                                <span className='p-2'>+962 79 620 8286</span>
                            </div>
                            <div className='col-12 pb-4'>
                                <span className='p-2' style={{color:'#C59D5F'}}><i className="fas fa-map-marker-alt"></i></span>
                                <span className='p-2'>Munaf, Amman, Jordan</span>
                            </div>
                            <div className='col-12 pb-4'>
                                <span className='p-2' style={{color:'#C59D5F'}}><i className="fas fa-envelope"></i></span>
                                <span className='p-2'>afoure95@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-4 text-center mt-4'>
                    <div className='col-12'>
                        <p style={{color:'#C59D5F'}}>Copyrights © 2021 . Designed by Jamil Afouri</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer