import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from '../component/Rating';
const initail = {
  products: [],
  loading: true,
  error: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, initail);
  useEffect(() => {
    const fetchdata = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.massage });
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1>محصولات ویژه</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((p) => (
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
                <Rating rating={p.rating} numberReview={p.numberReviews} />
                <Link to={`/product/${p.brand} `}>
                  <button>ثبت سفارش</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
