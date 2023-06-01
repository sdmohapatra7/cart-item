import React,{useState} from "react";

const Cartitem = ()=>{
    const initialState = {
        price:999,
        title:'Mobile Phone',
        qty:1,
        img:''
    }
    const[qty,setQty] = useState(initialState.qty);
    const increaseQty = ()=>{
        setQty(qty + 1);
        // setQty((prevState)=>prevState + 1);
    }
    const decreaseQty = ()=>{
        if(qty <= 0){
            return;
        }
        setQty(qty-1);
    }
    const deleteItem =()=>{
        setQty(initialState.qty);
    }
    return(
        <div className="cart-item">
            <div className="left-block">
                <img alt="" style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{initialState.title}</div>
                <div style={{color:'gray'}}>Rs.{initialState.price}</div>
                <div style={{color:'gray'}}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png" onClick={increaseQty}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={decreaseQty}/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" onClick={deleteItem}/>
                </div>
            </div>
        </div>
    );
};

const styles = {
    image:{
        height:125,
        width:125,
        borderRadius:4
    }
}
export default Cartitem;