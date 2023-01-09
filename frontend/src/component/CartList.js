import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { useContext } from 'react';
import axios from 'axios';
function CartList() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
    const updateCartHandel =async (item,quantiy) => {
        const { data } = await axios.get(`/api/product/brand/${item._id}`); 
         if (data.countInStock < quantiy) {
           window.alert('متاسفانه .موجودی تمام شد');
           return;
         }
         ctxDispatch({ type: 'ADD_CART', payload: { ...item, quantiy } });
    }
  return (
    <>
      {/* <Link to="/">
        <div>CartList</div>
      </Link> */}
      <div className="wrrap">
        <div className="col">
          {cart.cartItem.length === 0 ? (
            <span>سبد شما خالی است</span>
          ) : (
            cart.cartItem.map((item) => {
              return (
                <div className="cart-list" key={item._id}>
                  <img src={item.image} />
                  <span>{item.brand}</span>
                  <div
                    className="fass fa-minus-circle"
                    onClick={() =>
                      updateCartHandel(
                        item,
                        item.quantiy > 1 ? item.quantiy - 1 : 1
                      )
                    }
                  >
                    -
                  </div>
                  <span> {item.quantiy}</span>
                  <div
                    className="fass fa-plus-circle"
                    onClick={() =>
                      updateCartHandel(
                        item,
                        item.quantiy > item.countInStock ? '' : item.quantiy + 1
                      )
                    }
                  >
                    +
                  </div>
                  <span>{item.price} قیمت</span>
                  <div className="fass fa-trash" onClick={()=> ctxDispatch({type:'CART_REMOVE_ITEM',payload:item})}>پاک</div>
                </div>
              );
            })
          )}
        </div>
        <div className="total">
          <div>جمع سبدخرید : تعداد </div>
          <h3> {cart.cartItem.reduce((a, c) => a + c.quantiy, 0)}</h3>
          <h3> {cart.cartItem.reduce((a, c) => a + c.price * c.quantiy, 0)}</h3>
          <div className='checkOut'>
            <button>ثبت نهایی</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
