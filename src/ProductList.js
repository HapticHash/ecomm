import React from 'react';
import Products from './Products';
import './Products.css'
import {Link, Switch, Route} from 'react-router-dom';

import list from './prod.json';

function ProductList() {

    return (
        <div className='product-list'>
            <div className="scrollable">

            
                <div className='product-links'>

                    {list.map(item => (               
                    <div className="productList">
                        
                        <div className="productList__left">
                            <img src={item.image} alt=""/>
                        </div>

                        <div className="productList__right">
                            <Link key={item.id} to={`/products/${item.id}`}> {item.name}  </Link>
                            <p> <b> CAD $ {item.price} </b> </p>
                            <p>
                                <div className="products__rating">
                                    {Array(item.rating)
                                        .fill()
                                        .map((_) => (
                                            <p>⭐</p>
                                        ))}
                                </div>
                            </p>
                        </div>

                    </div>
                    ))}

                    </div>
                </div>
            <Switch>
                <Route path="/products/:id" component={Products} />
            </Switch>
         
        </div>
    )
}

export default ProductList
