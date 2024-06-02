"use client";

import { stringify } from "querystring";
import { useEffect } from "react";
import axiosClient from "../../_utils/axiosClient";

const ProductDetails = ({ params }: any) => {
  // //get one
  useEffect(() => {
    getOneProduct(params?.productId);
  }, []);

  const getOneProduct = async (id: any) => {
    const response = (await axiosClient.get(`/products/${id}?populate=*`)).data;
    console.log("here", response);
  };

  return <div>Okay {stringify(params)}</div>;
};

export default ProductDetails;
