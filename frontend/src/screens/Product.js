import React from 'react';
import { useParams } from 'react-router-dom';
function Product() {
  const param = useParams();
  const { brand } = param;
  return <div>{brand}</div>;
}

export default Product;
