import React, { Component } from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom'
import './header.css';
class Header extends Component {
    render() {
        return (

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <div className="App-nav">
                        <NavLink to='/home' className="App-nav-item" activeClassName="active">首页</NavLink>
                        <NavLink to='/list' className="App-nav-item" activeClassName="active">列表</NavLink>
                        <NavLink to='/about' className="App-nav-item" activeClassName="active">关于</NavLink>
                    </div>
                </header>

        );
    }
}

export default Header;
