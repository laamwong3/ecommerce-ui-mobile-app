import { Products } from "../types/services";

export const getAllProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const data: Products[] = await response.json();
  return data;
};
