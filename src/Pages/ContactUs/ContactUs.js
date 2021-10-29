import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import classes from './ContactUs.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useHistory, Prompt } from 'react-router-dom';
import Authentication from '../../Support/auth-context';
const ContactUs = () => {
    const history = useHistory();
    const authCtx = useContext(Authentication)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [inName, setInName] = useState(null)
    const [inEmail, setInEmail] = useState(null)
    const [inMessage, setInMessage] = useState(null)
    const [isAble, setIsAble] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isEntered, setIsEntered] = useState(false)
    const [alert, setAlert] = useState(false)

    // Start Validation Data 
    const handleName = (data) => {
        setName(data.target.value);
    }
    const handleEmail = (data) => {
        setEmail(data.target.value)
    }
    const handleMessage = (data) => {
        setMessage(data.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        checkLoggedIn()
        // console.log({ name, email, message })
    }
    useEffect(() => {
        name.trim().length > 8 && email.includes('@') && message.trim().length > 0 ? setIsAble(true) : setIsAble(false)
    }, [handleName, handleEmail, handleMessage]);
    const handleBlurName = () => {
        name.trim().length < 8 ? setInName(true) : setInName(false)
    }
    const handleBlurEmail = () => {
        !email.includes('@') ? setInEmail(true) : setInEmail(false)
    }
    const handleBlurMessage = () => {
        message.trim().length <= 0 ? setInMessage(true) : setInMessage(false)
    }
    // End Validation Data
    const checkLoggedIn=()=>{
        authCtx.isLogedIn? handlePOSTData():
        setAlert(true);
        setIsEntered(false);
    }
    const handleToSignIn=()=>{
        setAlert(false)
        history.replace('/auth')
    } 
    // Start Send Data 
    const handlePOSTData = async () => {
        setName(''); setEmail(''); setMessage('');
        setInName(null); setInEmail(null); setInMessage(null);
        setIsEntered(false)
        setIsLoading(true)
        try {
            const response = await fetch('https://smart-restaurant-2c2d9-default-rtdb.firebaseio.com/contactus.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, email, message
                })
            });
            if (!response.ok) {
                throw 'Faild POST Data!'
            };
            history.replace('/home')
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }
    // End Send Data 
    const handleFocus = () => {
        setIsEntered(true)
    }
    // const handleFinishFocused = () => {
    //     setIsEntered(false)
    // }
    let ContactUsData = <h1>{'Contact Us'.toUpperCase()}</h1>
    return (
        <>
            <Prompt when={isEntered} message={() => 'Sure ? You will lose your data if you go back! '} />
            <div className={classes.ContactUs}>
                <Header Header={classes.ContactUsHeader} Container={classes.backContainer} TypingBox={classes.ContactUsTypingBox} data={ContactUsData} />
                {alert && <div id="loginAlert" style={{ margin: 'auto', width: '65%' }} class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Alert!</strong> You have to sign in before submit your order.
                    <button type="button" style={{ background: 'none', border: 'none', float: 'right', fontWeight: 'bold', color: '#664d03' }} onClick={handleToSignIn}>
                        SIGN IN
                    </button>
                </div>}
                <div className={`container pt-4 ${classes.FormBack}`} style={{ width: '100%' }}>
                    <div className={`container py-4 mt-4 ${classes.formContainer} ${!isLoading ? 'text-left' : 'text-center'}`}>

                        {/* <!-- Bootstrap 5 starter form --> */}
                        {isLoading && <div className="spinner-border" style={{ width: '3rem', height: '3rem', marginTop: '3rem' }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {!isLoading && <form id="contactForm" className='container' onSubmit={handleSubmit} onFocus={handleFocus}>

                            {/* <!-- Name input --> */}
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={name} className={`form-control ${inName ? classes.notValid : inName == null ? classes.BeforeCheck : classes.Valid}`} id="name" type="text" placeholder="Name" data-sb-validations="required" onChange={handleName} onBlur={handleBlurName} />
                                {inName && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Name is required.</div>}
                            </div>

                            {/* <!-- Email address input --> */}
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input value={email} className={`form-control ${inEmail ? classes.notValid : inEmail == null ? classes.BeforeCheck : classes.Valid}`} id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" onChange={handleEmail} onBlur={handleBlurEmail} />
                                {inEmail && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Email Address Email is not valid.</div>}
                            </div>

                            {/* <!-- Message input --> */}
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea value={message} className={`form-control ${inMessage ? classes.notValid : inMessage == null ? classes.BeforeCheck : classes.Valid}`} id="message" type="text" placeholder="Message" style={{ height: '10rem' }} data-sb-validations="required" onChange={handleMessage} onBlur={handleBlurMessage}></textarea>
                                {inMessage && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Message is required.</div>}
                            </div>

                            {/* <!-- Form submissions success message --> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">Form submission successful!</div>
                            </div>

                            {/* <!-- Form submissions error message --> */}
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>

                            {/* <!-- Form submit button --> */}
                            <div className="d-grid">
                                <button className={`btn ${classes.btnCustom} btn-lg`} type="submit" disabled={isAble ? false : true}>Submit</button>
                            </div>

                        </form>}

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )

}

export default ContactUs