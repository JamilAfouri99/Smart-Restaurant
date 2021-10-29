import React,{useState} from "react"

const Authentication=React.createContext({
    token:'',
    email:'',
    isLogedIn: false,
    login:(token,email)=>{},
    logout:()=>{}
    }
)

export const AuthProvider=(props)=>{
    const [Token,setToken]=useState(null)
    const [email,setEmail]=useState('')
    const userIsLogedIn = !!Token
    const handleLogin=(token,email)=>{
        setToken(token);
        setEmail(email)
    }
    const handleLogout=()=>{
        setToken(null)
    }
    const contextData={
        token:Token,
        email:email,
        isLogedIn:userIsLogedIn,
        login:handleLogin,
        logout:handleLogout,
    }
    return <Authentication.Provider value={contextData}>{props.children}</Authentication.Provider>
}

export default Authentication