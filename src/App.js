import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import { Route, Redirect, Switch } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Shop from './Pages/Shop/Shop';
import TotalNum from './Support/menu-items-context'
import React,{useState} from 'react';
import Modal from './Modals/Modal';

function App() {
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
        <Route path="/"><Redirect to="/home"/></Route>
        <Route path="/home" exact><Home /></Route>
        <Route path="/menu"><Menu /></Route>
        <Route path="/aboutus"><AboutUs /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/shop"><Shop Items={handleDataFromShop} TheNewArray={menu}/></Route>
        {/* <button type="button" onClick={Handle}>Launch modal</button> */}
        <Modal handleIncItem={handleIncreaseItems} handleDeccItem={handleDecreaseItems} handleRemoveItem={handleRemoveItems}/>
      </TotalNum.Provider>
    </div>
  );
}

export default App;
