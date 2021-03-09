import React,{useState,useEffect} from 'react'
import Base from "./Base";
import Card from "./Card";
import {loadCart} from "./helper/CartHelper";
import PaymentB from "./PaymentB";




const Cart = () => {
    const [reload,setReload] = useState(false)
    const [products,setProducts] = useState([])

    useEffect(() => {
        setProducts(loadCart());
    },[reload]); 

    const loadAllProducts = (products) => {
        return(
            <div>
                {products.map((product,index) => (
                    <Card
                    key={index}
                    product={product}
                    addtocart={false}
                    removeFromCart={true}
                    reload={reload}
                    setReload={setReload}
                    />
        ))}

            </div>
        )
    }
    const loadCheckout = () => {
        return(
            <div>
                <h1>CheckOut</h1>
                
            </div>
        )
    }
    return (
        <Base title="Cart Page" description="Proceed to CheckOut">
        <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (loadAllProducts(products)) : (
            <h4>No Products</h4>
          )}
        </div>
        <div className="col-6">
          {products.length>0 ? (<PaymentB products={products} setReload={setReload}></PaymentB> ):( <h4>Please Login or Add Products in Cart</h4>)}
        </div>
        </div>
        </Base>
    )
}


export default Cart;