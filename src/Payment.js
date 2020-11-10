import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {
    
    const [{ basket, user }, dispatch ] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>
                        <p> 938 California Ave </p>
                        <p> Windsor, ON </p>
                        <p> N9B 2Z6 </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review item and delivery</h3>
                    </div>
                </div>

                <div className="payment__section">
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
