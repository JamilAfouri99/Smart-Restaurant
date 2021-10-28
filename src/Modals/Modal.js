import classes from './Modal.module.css'
import ModalItem from './ModalItem'
import MenuItems from '../Support/menu-items-context'
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Modal = (props) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory()
    const myOrder = useContext(MenuItems);
    const IncreaseItemHandler = (data) => {
        const UpdateOrderFromModal = myOrder.Total_Items.filter((item) => {
            item.id === data.id && item.ItemNumber++
            return [...myOrder.Total_Items]
        })
        props.handleIncItem(UpdateOrderFromModal);
    }
    const DecreaseItemHandler = (data) => {
        const UpdateOrderFromModal = myOrder.Total_Items.filter((item) => {
            item.id === data.id && item.ItemNumber--
            return [...myOrder.Total_Items]
        })
        props.handleDeccItem(UpdateOrderFromModal);
    };
    const RemoveItemHandler = (data) => {
        const UpdateOrderFromModal = myOrder.Total_Items.filter((item) => {
            return item !== data
        })
        props.handleRemoveItem(UpdateOrderFromModal);
    };
    useEffect(() => {
        let cost = 0
        myOrder.Total_Items.map((item) => {
            cost = cost + (item.ItemNumber * item.price)
            setTotalPrice(cost)
        })
    }, [myOrder]);
    // Satrt Posting Data
    const handlePostData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://smart-restaurant-2c2d9-default-rtdb.firebaseio.com/order.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'menu-data': myOrder.Total_Items,
                    'personal-data': ''
                })
            });
            if (!response.ok) {
                throw 'Faild send data'
            }
            document.getElementById("ExitModal").click();            
            myOrder.Total_Items = [];
            history.push('/home');
        } catch (error) {
            // console.log('ERROR', error.message)
            setError(error.message)
        }
        setIsLoading(false)
    }
    // End Posting Data
    return (
        <div className="modal fade" role="dialog" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#C59D5F' }}>Shopping List</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {myOrder.Total_Items.length > 0 && !isLoading && !error && <div className="modal-body">
                        <ul className="ul-modal p-0">
                            <table className="table table-hover">
                                <thead>
                                    <tr style={{ color: '#081528' }}>
                                        <th scope="col" colSpan="2" style={{ width: '37%' }}>Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Control</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myOrder.Total_Items?.map((item) => <ModalItem key={item.id} item={item} IncItems={IncreaseItemHandler} DecItems={DecreaseItemHandler} RemoveItems={RemoveItemHandler} />)}
                                </tbody>
                            </table>
                        </ul>
                    </div>}

                    {myOrder.Total_Items.length === 0 && !isLoading && !error && <p style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#081528' }}>There is no Item choosed</p>}
                    
                    {error !== null && <p style={{ textAlign: 'center', color: '#e10000', fontSize: '1.3rem', margin: '2rem', fontWeight: 'bold' }}>{error}</p>}
                    
                    {isLoading && <div className="spinner-grow" role="status" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold', color: '#081528', alignSelf: 'center', margin: '2rem' }}>
                        <span className="sr-only">Loading...</span>
                    </div>}


                    <div className="modal-footer footer pb-2">
                        <div className={`float-left ${classes.priceFooter}`}>
                            <p className={classes.Price}>TOTAL PRICE ${myOrder.Total_Items.length === 0 ? 0 : totalPrice}</p>
                        </div>
                        <div className={`footer ${classes.controlFooter}`}>
                            <button id="ExitModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ margin: '0rem 1rem 0rem 0rem', }}>Close</button>
                            <button type="button" className={`btn ${classes.btnCustom}`} style={{ width: '57%' }} disabled={myOrder.Total_Items.length === 0 || totalPrice == 0 ? true : false} onClick={handlePostData}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal