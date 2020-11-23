import React from 'react';
import Products from './Products';
import {Link, Switch, Route} from 'react-router-dom';

import list from './prod.json';

function ProductList() {

    const productsMapped = list.map(product => <Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link> )

    return (
        <div className='product-list'>
            <h1>Products</h1>
            <div className='product-links'>
                {productsMapped}
            </div>
        
            <Switch>
                <Route path="/products/:id" component={Products} />
            </Switch>
         
        </div>
    )
}

export default ProductList
