import React from 'react'
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

function Payment() {
    
    const [{ basket, user }, dispatch ] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to = "/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> Harshit Singh </p>
                        <p> 938 California Ave </p>
                        <p> Windsor, ON </p>
                        <p> N9B 2Z6 </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review item and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment Method</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
// 52:52