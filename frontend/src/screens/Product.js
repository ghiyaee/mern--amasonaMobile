import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from '../component/Rating';
import { useContext } from 'react';
import { Store } from '../Store';

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
  const Navigate=useNavigate()
  const param = useParams();
  const { brand } = param;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, initail);
  console.log(product);
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
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart } = state
  
  const addCartHandel =async () => {
    const newItem = cart.cartItem.find(f => f._id === product._id)
  const quantiy = newItem ? newItem.quantiy + 1 : 1;
    const { data } = await axios.get(`/api/product/brand/${product._id}`);
    if (data.countInStock < quantiy) {
      window.alert('متاسفانه .موجودی تمام شد');
        Navigate('/cart');
      return;
    } 
 
    ctxDispatch({ type: 'ADD_CART', payload: { ...product, quantiy } });
    Navigate('/cart')
  }
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
        <div> کد محصول &nbsp;{product._id}</div>
        <Rating rating={product.rating} numberReview={product.numberReviews} />
        <div>قیمت &nbsp;{product.price} تومان</div>
        <div>{product.descp}</div>
      </div>
      <div className="product_total">
        <div>قیمت &nbsp;{product.price} تومان</div>
        {product.countInStock > 0 ? (
          <div className="status_count green">
            موجودی {product.countInStock}
          </div>
        ) : (
          <div className="status_count red">نا موجود</div>
        )}
        {product.countInStock > 0 ? (
          <button className="status_buy " onClick={addCartHandel}>
            خرید
          </button>
        ) : (
          ''
        )}
        <div>{}</div>
      </div>
    </div>
  );
};

export default Product;
