import React from 'react';
import Order from "./Order";

export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        <aside className="box col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <h3>Cart is empty</h3>}</div>
            {cartItems.map((item) => (
                <div className="row" key={item.id}>
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr/>
                    <div className="row">
                        <div>Total price</div>
                        <div className="text-right strong">${itemsPrice.toFixed(2)}</div>
                    </div>
                </>
            )}
            <></>
            <hr/>
            <Order cartItems={cartItems}/>
        </aside>
    );
}