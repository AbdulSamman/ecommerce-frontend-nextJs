import axiosClient from "./axiosClient";

const createOrder = async (data: any) => {
  return await axiosClient.post("/orders", data);
};
export default { createOrder };
