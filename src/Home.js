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

            <div className="home__row">
                
                <Product
                    // id="001"
                    // title="Samsung Galaxy S20 (SM-G980F/DS) Dual SIM 128GB, 6.2 inch Display, Factory Unlocked GSM, International Version - No Warranty - Cloud Blue"
                    // price={855.00}
                    // rating={4}
                    // image="https://images-na.ssl-images-amazon.com/images/I/71IX75joWjL._AC_SX522_.jpg"
                    id = {items[0].id}
                    title = {items[0].title}
                    price = {items[0].price}
                    rating = {items[0].rating}
                    image = {items[0].image}
                />
                <Product
                    id = {items[1].id}
                    title = {items[1].title}
                    price = {items[1].price}
                    rating = {items[1].rating}
                    image = {items[1].image}
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
                    id = {items[4].id}
                    title = {items[4].title}
                    price = {items[4].price}
                    rating = {items[4].rating}
                    image = {items[4].image}
                />
            </div>
        </div>
    )
}

export default Home
//2:53:31