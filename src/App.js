import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import { Route, Redirect, Switch } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Shop from './Pages/Shop/Shop';
import TotalNum from './Support/menu-items-context'
import React,{useState,useContext} from 'react';
import Modal from './Modals/Modal';
import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Home/Profile/Profile';
import Authentication from './Support/auth-context';

function App() {
  const authCtx = useContext(Authentication)
  const [menu,setMenu]=useState([])
  const handleDataFromShop=(data)=>{
    setMenu(data)
    // console.log('Data Reached from MENU',data)
  }
  const handleIncreaseItems=(data)=>{
    // console.log('Data increased from MODAL',data)
    setMenu(data)
  }
  const handleDecreaseItems=(data)=>{
    // console.log('Data decreased from MODAL',data)
    setMenu(data)
  }
  const handleRemoveItems=(data)=>{
    // console.log('Data Removed from MODAL',data)
    setMenu(data)
  }
  return (
    <div className="App">
      <TotalNum.Provider value={{Total_Items:menu}}>
        <Switch>
          <Route path="/" exact><Redirect to="/home"/></Route>
          <Route path="/home" ><Home /></Route>
          <Route path="/menu"><Menu /></Route>
          <Route path="/aboutus"><AboutUs /></Route>
          <Route path="/blog"><Blog /></Route>
          <Route path="/contactus"><ContactUs /></Route>
          <Route path="/shop"><Shop Items={handleDataFromShop} TheNewArray={menu}/></Route>
          <Route path="/auth"><Auth/></Route>
          {authCtx.isLogedIn&&<Route path="/profile"><Profile/></Route>}
          <Route path="*"><Redirect to="/home"/></Route>
          <Modal handleIncItem={handleIncreaseItems} handleDeccItem={handleDecreaseItems} handleRemoveItem={handleRemoveItems}/>
        </Switch>
      </TotalNum.Provider>
    </div>
  );
}

export default App;
