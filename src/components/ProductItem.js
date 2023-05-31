//  import products from "./products";
// const ProductList = (products)=> {
// return (

// )
// }

import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <div class="border">
        <img src={product.image} />
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
      </div>
    </>
  );
};

export default ProductItem;
