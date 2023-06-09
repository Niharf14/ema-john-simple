import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        // console.log('ok');
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <div className='cart-info'>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default shop;