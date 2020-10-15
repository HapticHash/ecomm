import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5581._CB403140241_.jpg" 
                alt="prime banner"
            />

            <div className="home__row">
                <Product
                    id="001"
                    title="Samsung Galaxy Note 10+ N975F/DS 256GB"
                    price={1154.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tkQz5m9OL._AC_SX569_.jpg"
                />
                <Product
                    id="001"
                    title="Samsung Galaxy Note 10+ N975F/DS 256GB"
                    price={1154.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tkQz5m9OL._AC_SX569_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="001"
                    title="Samsung Galaxy Note 10+ N975F/DS 256GB"
                    price={1154.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tkQz5m9OL._AC_SX569_.jpg"
                />
                <Product
                    id="001"
                    title="Samsung Galaxy Note 10+ N975F/DS 256GB"
                    price={1154.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tkQz5m9OL._AC_SX569_.jpg"
                />
                <Product
                    id="001"
                    title="Samsung Galaxy Note 10+ N975F/DS 256GB"
                    price={1154.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tkQz5m9OL._AC_SX569_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
