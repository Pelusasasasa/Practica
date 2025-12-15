import { ProductCard } from "@/products";
import { products } from "@/products/data/products";
import React from "react";

const ProductosPage = () => {
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductosPage;
