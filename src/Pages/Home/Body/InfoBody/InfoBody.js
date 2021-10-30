import classes from './InfoBody.module.css'

const InfoBody = () => {
    return (
        <div className={`${classes.InfoBody} container`} >
            <img data-aos="zoom-in-down" width="189" height="128" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/our-histry.png" className="vc_single_image-img attachment-medium" alt="" loading="lazy" />
            <h2 style={{fontSize:'50px',color:'#252525',lineHeight:'60px',textAlign: 'center',fontFamily:'Yesteryear',fontWeight:'400',fontStyle:'normal'}} className="vc_custom_heading vc_custom_1570885804889">Palmplaza Story</h2>
            <div className="section-title-wrapper mb-4 text-center shortcode-rand-33 palmplaza-inline-css">
                <div className="title-wrap">
                <h2 className="section-title"></h2>
                </div>
                <div className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </div>
                <div className="button-section">
                    <p>
                        <a className="btn link" href="#" title="About Us">About Us</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoBody