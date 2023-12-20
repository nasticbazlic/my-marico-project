import React from "react";
import Button from "../button/button";
import ItemList from "../Common/item-list/item-list";
import { Link, Router } from "react-router-dom";

import Logo from '../../assets/icons/Company_logo.svg';
import RouterCom from "../../routes/route";

import './app.css';



const App = () => {
    const headers = [
        {item: 'Use Cases', to: '/use-case', id: 1},
        {item: 'About', to:'/about', id:2},
        {item: 'Pricing', to: '/pracing', id:3},
        {item: 'Blog',to: '/blog', id:4}
    ]
    const footer = [
        {item: 'About',to:'/about', id:2},
        {item: 'Pricing', to: '/pracing', id:3},
        {item: 'Blog', to: '/blog', id:4},
        {item: 'Sign in',to:'/sing-up', id:5}

    ]
    return (
        <div className="app">
            <header className="container header-marico">
                <Link to='/'><img src={Logo}></img></Link>
                <ItemList items={headers}
                          variation='headers-list-item' />
                <div className="header-marico-btn">
                    <div className="header-marico-login">
                       <Link to='/login'> Login </Link>
                    </div>
                    <Link to='/sign-up'>
                        <Button variation="common header-marico-button">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </header>

            <div className="content">
                <RouterCom />
            </div>

            <footer className="container header-marico">
                <Link to='/'><img src={Logo}></img></Link>
                <ItemList items={footer}
                        variation='headers-list-item' />
            </footer>
        </div>
    )
}

export default App;