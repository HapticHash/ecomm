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
                    title="Samsung Galaxy S20 (SM-G980F/DS) Dual SIM 128GB, 6.2 inch Display, Factory Unlocked GSM, International Version - No Warranty - Cloud Blue"
                    price={855.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71IX75joWjL._AC_SX522_.jpg"
                />
                <Product
                    id="002"
                    title="USB C Hub 14in1 MacBook Pro Adapter 4K HDMI/VGA/ RJ45 Gigabit Ethernet/ 3.5mm Audio/ 100W PD/USB C Data Port/ 6 USB Ports/SD/TF Card Reader for MacBook/Pro/Air/ChromeBook/Samsung Galaxy and More"
                    price={56.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61XSU6Mo2AL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="003"
                    title="Samsung Galaxy Buds Live - Bronze, SM-R180NZNAXAC"
                    price={207.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/719Xfw823XL._AC_SX679_.jpg"
                />
                <Product
                    id="004"
                    title="AmazonBasics 5 Cup Coffee Maker with Glass Carafe - Black"
                    price={28.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81BwWF7hi%2BL._AC_SY879_.jpg"
                />
                <Product
                    id="005"
                    title="Fullmosa Compatible Apple Watch Band 38mm 40mm 42mm 44mm, Yan Series Lichi Calf Leather Strap Band for iWatch SE &amp; Series 6 5 4 3 2 1"
                    price={22.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Xi2OUyD5L._AC_SX425_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
//2:53:31