import { getProducts } from "../../utils/requestProducts";
export const requestProductsCreator = (keyword) => {
  return {
    type: "GET_PRODUCTS_API",
    payload: getProducts(keyword),
  };
};
