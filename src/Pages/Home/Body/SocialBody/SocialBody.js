import classes from './SocialBody.module.css'

const SocialBody = () => (
    <div className={classes.SocialBody}>
        <div className="container">
            <h4 className='pb-0 text-left' style={{ color: '#C59D5F' }}>BLOG</h4>
            <h2 className='pb-4 text-left'>Latest News</h2>
            <div className={`row ${classes.centeredItems}`}>
                <div className='col-lg-4 col-md-6 col-sm-12 pb-4'>
                    <div className="card" style={{ width: '18rem' }} data-aos="zoom-in-left" data-aos-duration="1000">
                        <img className="card-img-top" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-4-1-400x300.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ textAlign: 'left' }}>
                            <h5 className="card-title">Delicious Hot Grilled Chicken Recipes</h5>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 pb-4'>
                    <div className="card" style={{ width: '18rem' }} data-aos="zoom-out" data-aos-duration="1000">
                        <img className="card-img-top" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-1-1-400x300.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ textAlign: 'left' }}>
                            <h5 className="card-title">Better Fed Than Red Whether Glories</h5>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 pb-4'>
                    <div className="card" style={{ width: '18rem' }}  data-aos="zoom-in-right" data-aos-duration="1000">
                        <span></span>
                        <img className="card-img-top" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-4-1-400x300.jpg" alt="Card image cap" />
                        <div className="card-body" style={{ textAlign: 'left' }}>
                            <h5 className="card-title">Delicious Hot Grilled Chicken Recipes</h5>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SocialBody