import React from "react"
import logo from './logo.svg';

export default function Header() {
    return (
        <nav className="nav-bar">
            <img src={logo} className="App-logo" alt="logo"/>
                <h3 className="h3-nav">ReactFacts</h3>
                <h4 className="h4-nav">React Course - Project 1</h4>
            </nav>
    )
}