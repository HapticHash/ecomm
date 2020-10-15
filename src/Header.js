import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcons from '@material-ui/icons/Search'
import ShoppingBasketIcons from '@material-ui/icons/ShoppingBasket'
import { BackspaceTwoTone } from '@material-ui/icons'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ basket }] = useStateValue();

    console.log(basket)

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" 
                    src="https://imperialholocron.com/wp-content/uploads/2017/02/Funko-Logo-800x445.png" 
                    alt="logo" 
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcons className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__options__lineOne"> Hello</span>
                        <span className="header__options__lineTwo"> Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__options__lineOne"> Orders </span>
                        <span className="header__options__lineTwo"> &amp; Return</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__options__lineOne"> Your</span>
                        <span className="header__options__lineTwo"> Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcons className="header__basketIcon" />
                        <span className="header__options__lineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header
