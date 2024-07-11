import axiosClient from "./axiosClient";

const createOrder = async (data: any) => {
  return await axiosClient.post("/api/orders", data);
};

export default { createOrder };
