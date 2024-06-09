import axiosClient from "./axiosClient";

const addToCart = (payload: any) => axiosClient.post("/carts", payload);

export default {
  addToCart,
};
