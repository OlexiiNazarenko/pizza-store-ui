import React from "react";

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="block">
            <img className="small" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <h3>${product.price.toFixed(2)}</h3>
            <div className="row">
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
}