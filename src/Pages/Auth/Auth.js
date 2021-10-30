import classes from './Auth.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useHistory, Prompt } from 'react-router-dom'
import Header from '../Home/Header/Header'
import Footer from '../Home/Footer/Footer'
import Authentication from '../../Support/auth-context'

const Auth = () => {
	const authCtx = useContext(Authentication)
	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [inName, setInName] = useState(null)
	const [inEmail, setInEmail] = useState(null)
	const [inPass, setInPass] = useState(null)
	const [isAble, setIsAble] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [isEntered, setIsEntered] = useState(false)
	const [isSignUp, setIsSignUp] = useState(false)

	// Start Validation Data 
	const handleName = (data) => {
		setName(data.target.value);
	}
	const handleEmail = (data) => {
		setEmail(data.target.value)
	}
	const handlePass = (data) => {
		setPass(data.target.value)
	}
	const handleToSignUp=()=>{
		setIsSignUp(true);
		setName(''); setEmail(''); setPass('');
		setInName(null); setInEmail(null); setInPass(null);
	}
	const handleToSignIn=()=>{
		setIsSignUp(false);
		setEmail(''); setPass('');
		setInEmail(null); setInPass(null);
	}
	useEffect(() => {
		isSignUp ? name.trim().length > 8 && email.includes('@') && pass.trim().length > 6 ? setIsAble(true) : setIsAble(false)
		:email.includes('@') && pass.trim().length > 6 ? setIsAble(true) : setIsAble(false)
	}, [handleName, handleEmail, handlePass,isSignUp]);
	
	const handleBlurName = () => {
		name.trim().length < 8 ? setInName(true) : setInName(false)
	}
	const handleBlurEmail = () => {
		!email.includes('@') ? setInEmail(true) : setInEmail(false)
	}
	const handleBlurPass = () => {
		pass.trim().length <= 6 ? setInPass(true) : setInPass(false)
	}
	// End Validation Data 
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAuth()
	}
	// Start Send Data 
	const handleAuth = async () => {
		setIsEntered(false);
		setIsLoading(true);
		let url 
		if(isSignUp){ url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzLFKqq_NZVFaQ6i16Sn1rfBYIrAm829o'}
		if(!isSignUp){ url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzLFKqq_NZVFaQ6i16Sn1rfBYIrAm829o'}
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name:name,
					email: email,
					password: pass,
					returnSecureToken: true
				})
			});
			const data = await response.json();
			if (!response.ok) {
				authCtx.logout()
				if (data.error.message !== undefined) {
					throw data.error.message
				} else {
					throw 'Faild Signing!'
				}
			};
			if(response.ok){
				setError(false);
				history.replace('/home')
				setName(''); setEmail(''); setPass('');
				setInName(null); setInEmail(null); setInPass(null);
				authCtx.login(data.idToken,data.email)
			}  
			console.log('Data Reseive', data);
		} catch (error) {
				setError(error);
				console.log('Error', error)
			}
		setIsLoading(false)
	}
	// End Send Data 

	const handleFocus = () => {
		setIsEntered(true)
	}

	let ContactUsData = <h1>{'login page'.toUpperCase()}</h1>
	return (
		<>
			<Prompt when={isEntered} message={() => 'Sure? You will lose your data if you go back!'} />
			<div className={classes.Auth}>
				<Header Header={classes.AuthHeader} Container={classes.backContainer} TypingBox={classes.AuthTypingBox} data={ContactUsData} />
				{error&&<div className={`alert alert-danger ${classes.errorAlarm}`} role="alert">{error}</div>}
				<div className={`container pt-4 ${classes.FormBack}`} style={{ width: '100%' }}>
					<div className={`container py-4 mt-4 ${classes.formContainer} ${!isLoading ? 'text-left' : 'text-center'}`}>

						{/* <!-- Bootstrap 5 starter form --> */}
						{isLoading && <div className="spinner-border" style={{ width: '3rem', height: '3rem', marginTop: '3rem' }} role="status">
							<span className="sr-only">Loading...</span>
						</div>}
						{!isLoading && <form id="contactForm" className={`container ${classes.Form}`} onSubmit={handleSubmit} onFocus={handleFocus}>

							{/* <!-- Name input --> */}
							{isSignUp&&<div className="mb-3">
								<label className="form-label">Name</label>
								<input value={name} className={`form-control ${inName ? classes.notValid : inName == null ? classes.BeforeCheck : classes.Valid}`} id="name" type="text" placeholder="Name" data-sb-validations="required" onChange={handleName} onBlur={handleBlurName} />
								{inName && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Name is required.</div>}
							</div>}

							{/* <!-- Email address input --> */}
							<div className="mb-3">
								<label className="form-label">Email Address</label>
								<input value={email} className={`form-control ${inEmail ? classes.notValid : inEmail == null ? classes.BeforeCheck : classes.Valid}`} id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" onChange={handleEmail} onBlur={handleBlurEmail} />
								{inEmail && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Email Address Email is not valid.</div>}
							</div>

							{/* <!-- Pass input --> */}
							<div className="mb-3">
								<label className="form-label">Password</label>
								<input value={pass} className={`form-control ${inPass ? classes.notValid : inPass == null ? classes.BeforeCheck : classes.Valid}`} id="pass" type="password" placeholder="Password" data-sb-validations="required" onChange={handlePass} onBlur={handleBlurPass}></input>
								{inPass && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Password is not valid.</div>}
							</div>

							{/* Asking a question */}

								<div className="pt-4">
									{!isSignUp&&<p className="m-0">Are you new? <button type="button" className={classes.switchBtn} onClick={handleToSignUp}>Sign Up</button></p>}
									{isSignUp&&<p className="m-0">Do you have an account ? <button type="button" className={classes.switchBtn} onClick={handleToSignIn}>Sign In</button></p>}
								</div>

							{/* <!-- Form submit button --> */}
							{!isSignUp&&<div className="d-flex justify-content-center" style={{ paddingTop: '2rem', marginBottom: '-0.5rem' }}>
								<button className={`btn ${classes.btnAuth}`} type="submit" disabled={isAble ? false : true}>Sign In</button>
							</div>}
							{isSignUp&&<div className="d-flex justify-content-center" style={{ paddingTop: '2rem', marginBottom: '-0.5rem' }}>
								<button className={`btn ${classes.btnAuth}`} type="submit" disabled={isAble ? false : true}>Sign Up</button>
							</div>}

						</form>}

					</div>
				</div>
				<Footer />
			</div>
		</>
	)

}

export default Auth