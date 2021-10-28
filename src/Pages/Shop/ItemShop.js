import classes from './ItemShop.module.css'

const ItemShop = (props) => {
    const handleAddItem=()=>{
        props.handlePubble()
        props.handleData(props)
    }
    return (
        <>
            <div className="card" style={{width:'18rem', height:'26rem',border:'1px solid #C59D5F'}}>
                <img className="card-img-top" src={props.Items.url} alt={props.Items.name} height='65%'/>
                <div className ="card-body">
                    <h5 className="card-title">{props.Items.name}</h5>
                    <p className="card-text">{props.Items.description}</p>
                    <div className='row'>
                        <div className='col-6' style={{textAlign:'left'}}>
                            <span>${props.Items.price}</span>
                        </div>
                        <div className='col-6' style={{textAlign:'right'}}>
                            <span>&#215;{props.Items.ItemNumber}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.AddBtn} onClick={handleAddItem}>
                    <a style={{color:'#C59D5F'}}><i className="fas fa-plus"></i></a>
                </div>
            </div>
        </>
    )
}

export default ItemShop