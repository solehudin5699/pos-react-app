const initialCart = {
  products: [],
  idProductOrdered: [],
  productsOrdered: [],
  totalPrice: 0,
};

const productsReducer = (prevState = initialCart, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      let products = action.payload;
      return {
        ...prevState,
        products: products.map((product) => {
          return product;
        }),
      };
    };
    case "SELECT_PRODUCTS":
      {
        const target = action.payload.target;
        const checked = target.checked;
        const value = Number(target.value);
        let productsOrder = prevState.products.find((item) => {
          return item.product_id === value;
        });
        if (checked) {
          if (!prevState.productsOrdered.find((item) => {return item.product_id === value;})) {
            prevState.productsOrdered.push({
              ...productsOrder,
              numOrder: 1,
            });
            prevState.idProductOrdered.push(value);
            return {
              ...prevState,
              totalPrice:Number(prevState.totalPrice)+
                Number(productsOrder.product_price),
            };
          }
        } else {
            prevState.totalPrice=Number(prevState.totalPrice)-Number(prevState.productsOrdered[prevState.idProductOrdered.indexOf(value)].product_price);
            prevState.productsOrdered.splice(
              prevState.idProductOrdered.indexOf(value),
                1
            );
            prevState.idProductOrdered.splice(
              prevState.idProductOrdered.indexOf(value),
                1
            );
            console.log(prevState)
            return {
              ...prevState,
            };
            
          
        }
      }
      break;
    case "CHANGE_QUANTITY":
      {
        const target = action.payload.target;
        const indexOrder = Number(target.value);
        const id = target.id;
        if (id === "plus") {
          return {
            ...prevState,
            productsOrdered: prevState.productsOrdered.map((item, index) => {
              if (index === indexOrder) {
                return {
                  ...item,
                  numOrder: Number(item.numOrder) + 1,
                  product_price:
                    Number(
                      prevState.products.find((product) => {
                        return (
                          product.product_id ===
                          prevState.productsOrdered[indexOrder].product_id
                        );
                      }).product_price
                    ) *
                    Number(prevState.productsOrdered[indexOrder].numOrder + 1),
                };
              } else {
                return item;
              }
            }),
            totalPrice:
              Number(prevState.totalPrice) +
              Number(
                prevState.products.find((item) => {
                  return (
                    item.product_id ===
                    prevState.productsOrdered[indexOrder].product_id
                  );
                }).product_price
              ),
          };
        } else if (
          id === "min" &&
          Number(prevState.productsOrdered[indexOrder].numOrder) >= 2
        ) {
          return {
            ...prevState,
            productsOrdered: prevState.productsOrdered.map((item, index) => {
              if (index === indexOrder) {
                return {
                  ...item,
                  numOrder: Number(item.numOrder) - 1,
                  product_price:
                    Number(
                      prevState.products.find((product) => {
                        return (
                          product.product_id ===
                          prevState.productsOrdered[indexOrder].product_id
                        );
                      }).product_price
                    ) *
                    Number(prevState.productsOrdered[indexOrder].numOrder - 1),
                };
              } else {
                return item;
              }
            }),
            totalPrice:
              Number(prevState.totalPrice) -
              Number(
                prevState.products.find((item) => {
                  return (
                    item.product_id ===
                    prevState.productsOrdered[indexOrder].product_id
                  );
                }).product_price
              ),
          };
        }else{
          return {
            ...prevState
          }
        }
      }
    case "CANCEL_ORDER":
      return {
        ...prevState,
        idProductOrdered: [],
        productsOrdered: [],
        totalPrice: 0,
      };
    default:
      return prevState;
  }
};

export default productsReducer;
