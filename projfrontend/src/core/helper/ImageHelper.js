import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl=product ? product.image : `https://www.indiamart.com/proddetail/blank-t-shirts-19935513488.html`;
    
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%",maxWidth:"100%"}}
            className="mb-3 rounded"
            alt="Not Available"
            />
            
        </div>
    )
}


export default ImageHelper;