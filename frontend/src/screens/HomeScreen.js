import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
function HomeScreen() {
  return (
    <div>
      <h1>محصولات ویژه</h1>
      <div className="products">
        {data.products.map((p) => (
          <div className="product" key={p.name}>
            <Link to={`/product/${p.brand}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${p.brand}`}>
                <p>{p.name}</p>
              </Link>
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

export default HomeScreen;
