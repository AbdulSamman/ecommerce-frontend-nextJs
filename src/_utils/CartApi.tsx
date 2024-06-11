import axiosClient from "./axiosClient";

const addToCart = async (payload: any) => {
  return await axiosClient.post("/carts", payload);
};

// get cart Data
const getUserCartItems = async (email: any) => {
  return await axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );
};

// delete cart item

const deleteCartItem = async (id: any) => {
  return await axiosClient.delete(`/carts/${id}`);
};

export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
};
