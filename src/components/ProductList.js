import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const list = products.map((product) => {
    return (
      <>
        <ProductItem product={product} key={product.id} />
      </>
    );
  });

  return <div class="flexThis"> {list}</div>;
};

export default ProductList;
