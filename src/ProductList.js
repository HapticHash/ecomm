import React from 'react';
import Products from './Products';
import './Products.css'
import {Link, Switch, Route} from 'react-router-dom';

import list from './prod.json';

function ProductList() {

    // const productsMapped = list.map(product => <Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link> )

    return (
        <div className='product-list'>
            <h2>All Products</h2>
            <div className='product-links'>
                {/* {productsMapped} */}
                
                
                <div className="productList">
                    <div>
                        <Link key={list[0].id} to={`/products/${list[0].id}`}> Samsung S20 (SM-G980F/DS)  </Link>
                        <p> <b> CAD $ {list[0].price} </b> </p>
                        <p>
                            <div className="products__rating">
                                {Array(list[0].rating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                        </p>
                    </div>
                </div>

                <div className="productList">
                    <div>
                        <Link key={list[1].id} to={`/products/${list[1].id}`}> USB C Hub 14 in 1  </Link>
                        <p> <b> CAD $ {list[1].price} </b> </p>
                        <p>
                            <div className="products__rating">
                                {Array(list[1].rating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                        </p>
                    </div>
                </div>

                <div className="productList">
                    <div>
                        <Link key={list[2].id} to={`/products/${list[2].id}`}> Samsung Galaxy Buds Live  </Link>
                        <p> <b> CAD $ {list[2].price} </b> </p>
                        <p>
                            <div className="products__rating">
                                {Array(list[2].rating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                        </p>
                    </div>
                </div>

                <div className="productList">
                    <div>
                        <Link key={list[3].id} to={`/products/${list[3].id}`}> AmazonBasics 5 Cup Coffee Maker  </Link>
                        <p> <b> CAD $ {list[3].price} </b> </p>
                        <p>
                            <div className="products__rating">
                                {Array(list[3].rating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                        </p>
                    </div>
                </div>

                <div className="productList">
                    <div>
                        <Link key={list[4].id} to={`/products/${list[4].id}`}> Fullmosa Compatible Apple Watch Band  </Link>
                        <p> <b> CAD $ {list[4].price} </b> </p>
                        <p>
                            <div className="products__rating">
                                {Array(list[4].rating)
                                    .fill()
                                    .map((_) => (
                                        <p>⭐</p>
                                    ))}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        
            <Switch>
                <Route path="/products/:id" component={Products} />
            </Switch>
         
        </div>
    )
}

export default ProductList
