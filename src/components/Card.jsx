import React, { useState } from 'react';
// contexti kulllanmamıza sağlayan fonksiyon
import { useContext } from 'react';
// kullanmak istediğimiz  context
import CartContext from '../CartContext';

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <a href="https://www.google.com.tr/?hl=tr">
        <img src={product.image} />
      </a>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>

        <button
          className="btn btn-outline-dark"
          onClick={() => {
            addToCart(product);
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
