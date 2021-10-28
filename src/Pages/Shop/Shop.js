import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import ItemShop from './ItemShop'
import classes from './Shop.module.css'
import React, { useState, useEffect } from 'react'
const Shop = (props) => {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [menuItemChoosed, setmenuItemChoosed] = useState([]);
    const [pubble, setPubble] = useState('');
    const [cartNumber, setCartNumber] = useState(0);
    
    const handlePubble=()=>{
        setPubble(classes.pubble)
        setTimeout(()=>{
            setPubble('')
        },200)
    }
    // Start Getting Data 
    useEffect(async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://smart-restaurant-2c2d9-default-rtdb.firebaseio.com/Items.json');
            // console.log('Reponse',response)
            if (!response.ok) {
            throw "Faild getting data!"
        }
        const data = await response.json()
        // console.log('My data', data)
        setMenu(data)
    }
    catch (error) {
        // console.log('ERROR', error.message)
        setError(error.message)
        }
    setIsLoading(false)
    }, [])
// End Getting Data 

// Start Adding Data
    const AddingHandler=(data)=>{
        setmenuItemChoosed((prev)=>{
            if(prev===props.TheNewArray){
            return prev.length==0?[data.Items]:prev.find((item)=>item==data.Items)==undefined?[...prev,data.Items]:[...prev.filter((item)=>item!==data.Items),...prev.filter((item)=>item.id==data.Items.id && item.ItemNumber++)]
            }else{
                prev=props.TheNewArray;
                return prev.length==0?[data.Items]:prev.find((item)=>item==data.Items)==undefined?[...prev,data.Items]:[...prev.filter((item)=>item!==data.Items),...prev.filter((item)=>item.id==data.Items.id && item.ItemNumber++)]
            }
        });
    }
    useEffect(()=>{
        props.Items(menuItemChoosed);
        menuItemChoosed.length>0 && setCartNumber(menuItemChoosed.reduce((prevVal,currVal)=>prevVal+currVal.ItemNumber,0))
    },[menuItemChoosed])
// End Adding Data 

let ShopData = <h1>SHOP</h1>

    return (
        <div className={classes.Shop}>
            <Header Header={classes.ShopHeader} Container={classes.backContainer} TypingBox={classes.ShopTypingBox} data={ShopData} />
            <div className='container pt-4'>
                <div className='row m-4 justify-content-center' style={{ paddingTop: '4rem' }}>
                    {isLoading && error.length===0 && <div className="spinner-border" style={{width:' 3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    {!isLoading && error.length===0 && menu.map((item) =>
                        <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center' style={{ marginBottom: '4rem' }} key={item.id}>
                            <ItemShop Items={item} handleData={AddingHandler} handlePubble={handlePubble}/>
                        </div>
                    )}
                    {error.length>0 && <p style={{fontSize:'2rem',fontWeight:'bold',color:'#C59D5F',marginBottom:'4rem',textAlign:'center'}}>{error}</p>}
                </div>
            </div>
            <div className={`row ${classes.shoppingList} ${pubble}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="col">
                    <i className="fas fa-shopping-cart"></i>
                    <span className={classes.IconNum}>{cartNumber}</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop