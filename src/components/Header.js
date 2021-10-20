import React from 'react'
import './Header.css'
import Search from '../icons/search.svg'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <strong>Send</strong>Freight
            </div>
            <div className="header__searchContainer">
                <input type="search" name="search" id="search" placeholder="Search" />
                <img className="header__search" src={Search} alt="search icon" />
            </div>
            <div className="header__btnContainer">
                <button className="header-btn request">Request Quote</button>
                <button className="header-btn book">Book Shipment</button>
            </div>
        </div>
    )
}

export default Header
