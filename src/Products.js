import React from 'react'
import items from './prod.json';
import './Products.css'
import { useStateValue } from './StateProvider';

    const Products = (props) => {
        let {id} = props.match.params
        const product = items.find(product => product.id === id)
        
        let {name, title, price, image, rating, itemDesc, totalReviews} = items[id-1]
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
                        <span className="products__rating__no"> ({rating}/5) </span>
                    </div>
                    <p className="products__rating__total"> Total Review : {totalReviews}</p>
                </div>
                <img src={image} alt=""/>
                <div className="button__cart">
                    <button onClick={addToBasket}>Add to cart</button>
                </div>
                <div className="products__description"> 
                    <p> <b> About this item </b></p>
                   
                    {items[id-1].About.map(list => ( 
                        <div>
                        <ul>
                            <li>{list.itemDesc}</li>
                         </ul>
                        </div>
                    ))}
                   
                    
                    <br/>
                    <p> <b> Customer Reviews </b></p>
                    
                    
                    {items[id-1].Reviews.map(list => (   
                        <div className="product__review">
                            <div className="product__review__intro">
                                <div className="reviewer__top">
                                    <div className="reviewer__image">
                                        <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"/>
                                    </div>
                                    <div className="reviewer__name">
                                        {list.ReviewerName}
                                    </div>
                                </div>
                                <div className="reviewer__rating">
                                    {Array(list.ReviewerRating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                                    <span className="review__title"> {list.ReviewTitle} </span>
                                </div>
                                <div className="review__posted"> Reviewed on {list.postedDate}</div>
                            </div>
                            <div className="product__review__desc">
                                {list.ReviewDesc}
                            </div>
                        </div>
                    ))}
                    
                </div>

                  {/* <div className="product_review">
                    <p><strong>Review this product</strong></p>
                    <p>Share your thoughts with other customers</p>
                    <Link key={id} to={`/create-review/${id}`}>
                        <button className="btn_review">Write a customer review</button>
                    </Link>
                </div> */}

            </div>
        </div>
    );
};


export default Products