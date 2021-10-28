import classes from './ModalItem.module.css'
import React, { setState } from 'react'
const ModalItem = (props) => {
    const handleIncreaseItem = () => {
        // console.log('I choosed this one', props.item)
        props.IncItems(props.item)
    }
    const handleDeccreaseItem = () => {
        // console.log('I choosed this one', props.item)
        props.DecItems(props.item)
    }
    const handleRemoveItem = () => {
        // console.log('I choosed this one', props.item)
        props.RemoveItems(props.item)
    }
    return (
        <>
            <tr className={classes.tr}>
                <th colSpan="2" style={{ width: '37%' }}>{props.item.name}</th>
                <td>${(props.item.price).toFixed(2)}</td>
                <td className="text-center">&#215;{props.item.ItemNumber}</td>
                <td>
                    <div className="d-flex justify-content-between">
                        <div><button type="button" style={{ border: 'none' }} onClick={handleIncreaseItem}><i className="fas fa-plus"></i></button></div>
                        <div className="flex-grow-1" style={{textAlign: 'center' }}><h5 id="display_item">{props.item.ItemNumber}</h5></div>
                        {props.item.ItemNumber >= 2 &&<div ><button type="button" style={{ border: 'none' }} onClick={handleDeccreaseItem}><i className="fas fa-minus"></i></button></div>}
                        {props.item.ItemNumber <=1 && <div ><button type="button" style={{ border: 'none' }}onClick={handleRemoveItem} ><i style={{color:'#e40000'}} className="fas fa-trash-alt"></i></button></div>}
                    </div>
                </td>
            </tr>
        </>
    )
}

export default ModalItem