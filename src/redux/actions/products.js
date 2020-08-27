export const getProductCreator = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};
export const selectProductCreator = (event) => {
  // if(event.target.checked){
    return {
      type: "SELECT_PRODUCTS",
      payload: event,
    };
  // } else {
  //   return {
  //     type: "UNSELECT_PRODUCTS",
  //     payload: event,
  //   };
  // }
  
};
export const changeQuantityCreator = (event) => {
  return {
    type: "CHANGE_QUANTITY",
    payload: event,
  };
};
export const cancelOrderCreator = () => {
  return {
    type: "CANCEL_ORDER",
  };
};
