import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { useContext } from 'react';
import axios from 'axios';
function CartList() {
  const Navigate=useNavigate()
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
  const handelBuy = () => {
    if (cart.cartItem.length === 0) {
     window.alert('سبدخرید شما خالی است');
     Navigate('/');
      return;
    }
  }
  return (
    <>
      <div className="wrrap">
        <div className="col">
          {cart.cartItem.length === 0 ? (
            <span className="emty">سبد شما خالی است</span>
          ) : (
            cart.cartItem.map((item) => {
              return (
                <div className="cart-list" key={item._id}>
                  <img src={item.image} />
                  <span>{item.brand}</span>
                  <div
                    className="fass "
                    onClick={() =>
                      updateCartHandel(
                        item,
                        item.quantiy > 1 ? item.quantiy - 1 : item.quantiy
                      )
                    }
                  >
                    -
                  </div>
                  <span> {item.quantiy}</span>
                  <div
                    className="fass "
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
                  <div
                    className="fass "
                    onClick={() =>
                      ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
                    }
                  >
                    حذف
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="total">
          <div>جمع سبدخرید : تعداد </div>
          <h3> {cart.cartItem.reduce((a, c) => a + c.quantiy, 0)}</h3>
          <h3> {cart.cartItem.reduce((a, c) => a + c.price * c.quantiy, 0)}</h3>
          <div className="checkOut">
            <button onClick={ handelBuy}>ثبت نهایی</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
