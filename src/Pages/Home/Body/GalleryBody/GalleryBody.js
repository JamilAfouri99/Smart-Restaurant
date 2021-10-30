import classes from './GalleryBody.module.css'

const GalleryBody=()=>{
    return(
        <div className={classes.GalleryBody}>
            <div className="container">
                <h4 className='pb-2' style={{color:'#C59D5F'}}>GALLERY</h4>
                <h2 className='pb-2'>The Devine Feel of Taste</h2>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-2 pb-2' data-aos="flip-down" data-aos-duration="1000">
                        <div>Cheese Roll</div>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/07/gallery3-1-380x340.jpg" className="rounded mx-auto d-block" alt="..."/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-2 pb-2' data-aos="flip-down" data-aos-duration="1000">
                        <div>Roast Meat</div>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/05/gallery8-1-380x340.jpg" className="rounded mx-auto d-block" alt="..."/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-2 pb-2' data-aos="flip-down" data-aos-duration="1000">
                        <div>American Chicken</div>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/07/gallery10-1-380x340.jpg" className="rounded mx-auto d-block" alt="..."/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-2 pb-2' data-aos="flip-down" data-aos-duration="1000">
                        <div>Mexican Chicken</div>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/07/gallery1-1-380x340.jpg" className="rounded mx-auto d-block" alt="..."/>
                    </div>
                </div>
                <h2 className='pt-4 p-3'>A person with taste is merely one who recognize the greatest beauty in the simplest things.</h2>
            </div>
        </div>
    )
}

export default GalleryBody