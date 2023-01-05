import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from '../component/Rating';
const initail = {
  product: [],
  loading: true,
  error: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Product = () => {
  const param = useParams();
  const { brand } = param;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, initail);
  useEffect(() => {
    const fetchdata = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/product/${brand}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchdata();
  }, [brand]);
  return loading ? (
    <div>لطفا شکیبا باشید...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="product_list">
      <div className="product-img">
        <img src={product.image}></img>
      </div>
      <div className="titel-list">
        <div>{product.brand}</div>
        <Rating rating={product.rating} numberReview={product.numberReviews} />
        <div>قیمت &nbsp;{product.price} تومان</div>
        <div>{product.descp}</div>
      </div>
      <div className="product_total">
        <div>قیمت &nbsp;{product.price} تومان</div>
        {product.countInStock > 0 ? (
          <div className="status_count green">موجود</div>
        ) : (
          <div className="status_count red">نا موجود</div>
        )}
        {product.countInStock > 0 ? (
          <button className="status_buy ">خرید</button>
        ) : (
         ''
        )}
      </div>
    </div>
  );
};

export default Product;
