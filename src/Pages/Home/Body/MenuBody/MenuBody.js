import classes from './MenuBody.module.css'

const MenuBody = () => {
    return (
        <div className={`${classes.MenuBody} p-5 container`}>
            <div className='p-2 text-center' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h3 style={{ color: '#C59D5F', fontWeight: 'bold' }}>MENU</h3>
                <h2>Delicious Food</h2>
                <p style={{width:'80%',textAlign:'center'}}>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br />
                {/* <span><a>READ MORE</a></span> */}
            </div>
            <div className=''>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-6 col-md-12 pb-2 p-0">
                        <div></div>
                        <img width='300px' height='400' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2013/06/pp-shop-tab8-500x752.jpg" className="rounded mx-auto d-block" alt="..." />
                        <p>Chicken Soup</p>
                        <span>$30</span>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 pb-2 p-0">
                        <div></div>
                        <img width='300px' height='400' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2013/06/shop-tab7-1-532x800.jpg" className="rounded mx-auto d-block" alt="..." />
                        <p>Oatmeal Cookie</p>
                        <span>$10</span>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 pb-2 p-0">
                        <div></div>
                        <img width='300px' height='400' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2013/06/pp-shop-tab4-500x752.jpg" className="rounded mx-auto d-block" alt="..." />
                        <p>Pizza Pane</p>
                        <span>$22</span>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12 pb-2 p-0">
                        <div></div>
                        <img width='300px' height='400' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2013/06/shop-tab11-1-532x800.jpg" className="rounded mx-auto d-block" alt="..." />
                        <p>Vegetable Pasta</p>
                        <span>$25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBody