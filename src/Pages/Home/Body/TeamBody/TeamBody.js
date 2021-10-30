import classes from './TeamBody.module.css'

const TeamBody = () => {
    return (
        <div className={classes.TeamBody}>
            <div className="container">
                <h4 className='pb-2' style={{ color: '#C59D5F' }}>OUR TEAM</h4>
                <h2 className='pb-2'>Specialized Chefs</h2>
                <div className={`row ${classes.MenyItems}`}>
                    <div className="col-md-4 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                        <span></span>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/06/chef_team_2-1.jpg" className="rounded mx-auto d-block" alt="..." />
                        <div>
                            <h3>Andrea Bell</h3>
                            <p>FOUNDER</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
                        <span></span>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/06/chef_team_1-1.jpg" className="rounded mx-auto d-block" alt="..." />
                        <div>
                            <h3>Jennifer Luu</h3>
                            <p>COORDINATOR</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6" id="TeamBody" data-aos="zoom-in" data-aos-duration="1000">
                        <span></span>
                        <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/06/chef_team_3-1.jpg" className="rounded mx-auto d-block" alt="..." />
                        <div>
                            <h3>Natasha</h3>
                            <p>CO FOUNDER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamBody