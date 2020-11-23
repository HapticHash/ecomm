import React from 'react'
import './ProductDetail.css'
import { useStateValue } from './StateProvider'
import Product from './Product'

function ProductDetail({ id, title, price, rating, image, hideButton }) {
    
    const [{}, dispatch] = useStateValue()

    return (
        <div className="productDetail">
            <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
            
                <p className="checkoutProduct__price">
                    <small>CDN $ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/* {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                    ))} */}
                </div>
                {!hideButton && (
                    <button >Remove from cart</button>
                )}
                
            </div>
        </div>
        </div>
    )
}

export default ProductDetail
