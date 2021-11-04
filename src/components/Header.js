import React from 'react';

export default function Header(props) {
    return (
        <header className="row box center">
            <div className="row box">
                <a href="#">
                    <h1>
                        Pizza Store
                    </h1>
                </a>
            </div>
            <div className="row">
                <div className="row box">
                    <a href="#/signin">
                        SignIn
                    </a>
                </div>
                <div className="row box">
                    <a href="#/cart">
                        Cart
                    </a>
                </div>
            </div>
        </header>
    );
}