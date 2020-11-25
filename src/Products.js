import React from 'react'
import { Link, useHistory } from "react-router-dom"
import items from './prod.json';
import './Products.css'
import { useStateValue } from './StateProvider';

const Products = (props) => {
    let { id } = props.match.params
    const product = items.find(product => product.id === id)

    let { name, title, price, image, rating, aboutItem1, aboutItem2, aboutItem3, aboutItem4 } = items[id - 1]
    const [{}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="products">
            <div className="scrollable">
                <div className="products__info">
                    <p className="products__title">{title}</p>
                    <p className="products__price">
                        <small>CAD $ </small>
                        <strong>{price}</strong>
                    </p>
                    <div className="products__rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))}
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="button__cart">
                    <button onClick={addToBasket}>Add to cart</button>
                </div>
                <div className="products__description"> 
                    <p> <b> About this item </b></p>
                    <ul>
                        <li>{aboutItem1}</li>
                        <li>{aboutItem2}</li>
                        <li>{aboutItem3}</li>
                        <li>{aboutItem4}</li>
                        
                    </ul>
                </div>

                  <div className="product_review">
                    <p><strong>Review this product</strong></p>
                    <p>Share your thoughts with other customers</p>
                    <Link key={id} to={`/create-review/${id}`}>
                        <button className="btn_review">Write a customer review</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};


export default Products