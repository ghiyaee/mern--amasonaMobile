import React from 'react'
import data from '../data';
function HomeScreen() {
  return (
    <div>
      <h1>محصولات ویژه</h1>
      <div className="products">
        {data.products.map((p) => (
          <div className="product" key={p.name}>
            <a href="/product">
              <img src={p.image} alt={p.name} />
            </a>
            <div className="product-info">
              <p>{p.name}</p>
              <p>
                <strong>{p.price}</strong>
                &nbsp; تومان
              </p>
              <button>افزودن به سبد</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen