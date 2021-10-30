import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import React, { useState, useContext, Suspense } from 'react';
import TotalNum from './Support/menu-items-context'
import Authentication from './Support/auth-context';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Menu = React.lazy(() => import('./Pages/Menu/Menu'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs/AboutUs'));
const Blog = React.lazy(() => import('./Pages/Blog/Blog'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));
const Shop = React.lazy(() => import('./Pages/Shop/Shop'));
const Modal = React.lazy(() => import('./Modals/Modal'));
const Auth = React.lazy(() => import('./Pages/Auth/Auth'));
const Profile = React.lazy(() => import('./Pages/Home/Profile/Profile'));

function App() {
  const authCtx = useContext(Authentication)
  const [menu, setMenu] = useState([])
  const handleDataFromShop = (data) => {
    setMenu(data)
  }
  const handleIncreaseItems = (data) => {
    setMenu(data)
  }
  const handleDecreaseItems = (data) => {
    setMenu(data)
  }
  const handleRemoveItems = (data) => {
    setMenu(data)
  }
  return (
    <div className="App">
      <TotalNum.Provider value={{ Total_Items: menu }}>
        <Suspense fallback={<div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status" style={{width:'5rem',height:'5rem'}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>}>
          {/* <Switch> */}
            <Route path="/" exact><Redirect to="/home" /></Route>
            <Route path="/home" ><Home /></Route>
            <Route path="/menu"><Menu /></Route>
            <Route path="/aboutus"><AboutUs /></Route>
            <Route path="/blog"><Blog /></Route>
            <Route path="/contactus"><ContactUs /></Route>
            <Route path="/shop"><Shop Items={handleDataFromShop} TheNewArray={menu} /></Route>
            <Route path="/auth"><Auth /></Route>
            {authCtx.isLogedIn && <Route path="/profile"><Profile /></Route>}
            <Route path="*"><Redirect to="/home" /></Route>
            <Modal handleIncItem={handleIncreaseItems} handleDeccItem={handleDecreaseItems} handleRemoveItem={handleRemoveItems} />
          {/* </Switch> */}
        </Suspense>
      </TotalNum.Provider>
    </div>
  );
}

export default App;
