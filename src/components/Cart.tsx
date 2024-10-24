// src/Cart.tsx

// src/Cart.tsx

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (index + 1) * 10,
  image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
}));

const Cart: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const handleNext = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="product-list">
        {products
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>{" "}
              {/* Thay đổi class ở đây */}
            </div>
          ))}
      </div>
      <div className="button-container">
        <button
          className="prev-next"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="prev-next"
          onClick={handleNext}
          disabled={currentIndex >= products.length - itemsToShow}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cart;

// Thêm dòng này ở cuối file
export {};
