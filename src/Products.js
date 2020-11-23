import React from 'react'
import items from './prod.json';

    const Products = (props) => {
        let {id} = props.match.params
        const product = items.find(product => product.id === id)
        
        let {name, title, price, image, rating} = items[id-1]
   
    return (
            <div className='product'>
                <h2>{title}</h2>
                <h4>CAD ${price}</h4>
                <img className="product__image" src={image} alt="image"/>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                    ))}
                </div>

            </div>
        );
    };


export default Products
