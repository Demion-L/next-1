import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className='p-5 my-5 bg-gray-700 text-white text-xl hover:bg-sky-500'>
        Content
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
