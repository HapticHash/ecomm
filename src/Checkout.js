import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/HTL20/1266781_1367408_ca_htl_2020_1500x300_ca-en.jpg"
                    alt="ad banner"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h1> Shopping Cart </h1>
                        <h3> Your Shopping Cart is empty.</h3>
                        <p> You have no items in your cart currently. To buy one--or more--now, click "Add to cart" next to the item.</p>
                    </div>
                ) : (
                    <div>
                        <h3>Hello, {user?.email} </h3>
                        <h1 className="checkout__title"> Your Shopping Cart</h1>
                        
                        {basket?.map((item) => (
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            )
                        )}
                    </div>   
                )}
            </div>
            
            {basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
            )}
        </div>
        
    )
}

export default Checkout
