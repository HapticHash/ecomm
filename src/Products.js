import React from 'react'
import items from './prod.json';
import './Products.css'

    const Products = (props) => {
        let {id} = props.match.params
        const product = items.find(product => product.id === id)
        
        let {name, title, price, image, rating} = items[id-1]
   
    return (
        <div className="products">
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
            {/* <button onClick={addToBasket}>Add to cart</button> */}

        </div>
        );
    };


export default Products
