"use client";
import React from "react";
import style from "./AddToCart.module.css";

const AddToCart = () => {
  return (
    <div className={style.button}>
      <button
        className='btn btn-primary'
        onClick={() => console.log("click")}></button>
    </div>
  );
};

export default AddToCart;
