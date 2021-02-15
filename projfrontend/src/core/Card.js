import React from 'react'
import {Redirect} from "react-router-dom"
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart,removeItemFromCart } from "./helper/CartHelper";


const isAuthenticted=true;

const Card = ({
    product,
    addtocart=true,
    removeFromCart=false,
    }) => {

        const cartTitle= product ? product.name : "Default Image";
        const cartDescription= product ? product.description : "Default Description";
        const cartPrice= product ? product.price : "Default Price";


        const addToCart = () => {
            if(isAuthenticted)
            {
                addItemToCart(product,()=>{})
                console.log("Added To Cart");
            }
            else{
                console.log("Login Please!!");
            }
        }

        const getRedirect = redirect => {
            if(redirect)
            {
                return <Redirect to ="/cart" />;
            }
        }
        

        const showAddtocart=addToCart =>{
            return(
                addToCart && (
                    <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                  >
                    Add to Cart
                  </button>      
                )

            )
        }

        const showRemoveFromCart=removeFromCart =>{
            return(
                removeFromCart && (
                    <button
                onClick={() => {
                    removeItemFromCart(product.id)
                    console.log("Prodcut Removed From Cart");
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
                )
            )
        }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
         <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddtocart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card;