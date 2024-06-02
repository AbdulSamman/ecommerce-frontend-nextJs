"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
// import ProductApis from "../_utils/ProductApis";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ProductSection = () => {
  const { products } = useContext(AppContext);
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProductSection;
