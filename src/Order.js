import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    const history = useHistory()
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small><b>Order ID: </b> {order.id}</small>
            </p>
            {console.log(order.data)}
            {order.data.basket?.map(item => (
                <div>
                    
                    <div className="order__review"> <button onClick={() => history.push('/newReview/')}>Upload Review</button> </div>
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        hideButton
                    />
                    
                </div>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order total: {value} </h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
