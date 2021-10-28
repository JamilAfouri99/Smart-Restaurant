import classes from './NumBody.module.css'
import React,{useState,useEffect} from 'react'

const NumBody = () => {
    const [award,setAward]=useState('')
    const [staff,setStaff]=useState('')
    const [branches,setBranches]=useState('')
    const [customers,setCustomers]=useState('')

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            if(window.scrollY>=2700){
                setAward(classes.award);
                setStaff(classes.staff);
                setBranches(classes.branches);
                setCustomers(classes.customers);
            }else{
                setAward('');
                setStaff('');
                setBranches('');
                setCustomers('');
            }
        });
    },[window.scrollY])
    
return (
        <div className={`${classes.NumBody}`}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 col-xs-12" style={{marginTop:'-12px'}}>
                        <div className="counter-thumb">
                            <img className="img-fluid" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-4-1.png" width="50" height="70" alt="Award Win" />
                        </div>
                        <div className="counter-value pt-4">
                            <h3>
                                <span className={`counter-up text-white ${award}`} data-count="328"></span>
                                <span className={`${classes.counterSuffix} p-1`}>+</span>
                            </h3>
                        </div>
                        <div className="counter-title text-white">
                            <h4>Award Win</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="counter-thumb">
                            <img className="img-fluid" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-2-1.png" width="50" height="70" alt="Award Win" />
                        </div>
                        <div className="counter-value pt-4">
                            <h3>
                                <span className={`counter-up text-white ${staff}`} data-count="354"></span>
                                <span className={`${classes.counterSuffix} p-1`}>+</span>
                            </h3>
                        </div>
                        <div className="counter-title text-white">
                            <h4>Qualified Staff</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="counter-thumb">
                            <img className="img-fluid" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-7.png" width="50" height="70" alt="Award Win" />
                        </div>
                        <div className="counter-value pt-4">
                            <h3>
                                <span className={`counter-up text-white ${branches}`} data-count="580"></span>
                                <span className={`${classes.counterSuffix} p-1`}>+</span>
                            </h3>
                        </div>
                        <div className="counter-title text-white">
                            <h4>Branches</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="counter-thumb">
                            <img className="img-fluid" src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-6.png" width="50" height="70" alt="Award Win" />
                        </div>
                        <div className="counter-value pt-4">
                            <h3>
                                <span className={`counter-up text-white ${customers}`} data-count="6028"></span>
                                <span className={`${classes.counterSuffix} p-1`}>+</span>
                            </h3>
                        </div>
                        <div className="counter-title text-white">
                            <h4>Happy Customers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumBody