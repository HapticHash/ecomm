import React from 'react'
import './Home.css'
import Product from './Product'

import items from './prod.json';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5581._CB403140241_.jpg" 
                alt="prime banner"
            />
            <div className="home__group">
                <div className="home__row"> 
                    <Product
                        id = {items[0].id}
                        title = {items[0].title}
                        price = {items[0].price}
                        rating = {items[0].rating}
                        image = {items[0].image}
                    />
                    <Product
                        id = {items[14].id}
                        title = {items[14].title}
                        price = {items[14].price}
                        rating = {items[14].rating}
                        image = {items[14].image}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id = {items[2].id}
                        title = {items[2].title}
                        price = {items[2].price}
                        rating = {items[2].rating}
                        image = {items[2].image}
                    />
                    <Product
                        id = {items[3].id}
                        title = {items[3].title}
                        price = {items[3].price}
                        rating = {items[3].rating}
                        image = {items[3].image}
                    />
                    <Product
                        id = {items[9].id}
                        title = {items[9].title}
                        price = {items[9].price}
                        rating = {items[9].rating}
                        image = {items[9].image}
                    />
                </div>
                <div className="home__row"> 
                    <Product
                        id = {items[10].id}
                        title = {items[10].title}
                        price = {items[10].price}
                        rating = {items[10].rating}
                        image = {items[10].image}
                    />
                    <Product
                        id = {items[15].id}
                        title = {items[15].title}
                        price = {items[15].price}
                        rating = {items[15].rating}
                        image = {items[15].image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
//2:53:31