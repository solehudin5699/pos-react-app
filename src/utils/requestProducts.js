import axios from "axios";

export const getProducts = (keywordSearch) => {
  return axios.get(
    `http://localhost:1000/products/search?name=${keywordSearch}&sortBy=product_id&orderBy=ASC&limit=7&page=1`
  );
};
