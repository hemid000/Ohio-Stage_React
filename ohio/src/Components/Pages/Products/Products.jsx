import React from "react";
import ProductsInfo from "./StandartProducts/ProductsInfo";
import ProductReview from "./ProductReview/ProductReview";
import Related from "./RelatedProducts/Related";
const Products = () => {
  return (
    <main>
      <ProductsInfo />
      <ProductReview />
      <Related />
    </main>
  );
};

export default Products;
