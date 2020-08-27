const initialState = {
  data: [],
  error: "",
  isPending: false,
  isFullFilled: false,
  isRejected: false,
};

const requestProductsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case "REJECTED":
      return {
        ...prevState,
        isRejected: true,
        error: action.payload,
        isPending: false,
      };
    case "FULLFILLED":
      return {
        ...prevState,
        isFullFilled: true,
        data: action.payload.data,
        isPending: false,
      };
    default:
      return prevState;
  }
};

export default requestProductsReducer;
