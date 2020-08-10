import React from "react";
import axios from "axios";
import update from "react-addons-update";

async function postOrder(productOrder, quality, total) {
  let body = {
    product_order: `${productOrder}`,
    quality_order: `${quality}`,
    total_price: `${total}`,
  };
  let res = await axios.post("http://localhost:1000/order/add/", body);
  console.log(res.data);
}

const Mcontext = React.createContext();
class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productChecked: [],
      numberChecked: 0,

      priceProductOrdered: [],
      idProductOrdered: [],
      nameProductOrdered: [],
      numberProductOrdered: [],
      totalPriceOrder: 0,
      isCheckOut: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeNumberOrder = this.changeNumberOrder.bind(this);
  }
  totalPriceOrder = () => {
    if (this.state.numberChecked !== 0) {
      let totalPrice = this.state.priceProductOrdered.reduce(
        (total = 0, value) => {
          return total + value;
        }
      );
      this.setState({ totalPriceOrder: totalPrice });
    }
  };
  handleChange = (event) => {
    const target = event.target;
    const checked = target.checked;
    const value = Number(target.value);
    let productChecked = this.state.products.find((item) => {
      return item.product_id === value;
    });
    if (checked) {
      this.state.productChecked.push(productChecked);
      this.state.idProductOrdered.push(
        this.state.productChecked.find((item) => {
          return item.product_id === value;
        }).product_id
      );
      this.state.nameProductOrdered.push(
        this.state.productChecked.find((item) => {
          return item.product_id === value;
        }).product_name
      );
      this.state.priceProductOrdered.push(
        this.state.productChecked.find((item) => {
          return item.product_id === value;
        }).product_price
      );
      this.state.numberProductOrdered.push(1);
      this.setState({ numberChecked: this.state.productChecked.length });
      this.setState({
        totalPriceOrder:
          this.state.totalPriceOrder + Number(productChecked.product_price),
      });
    } else {
      this.state.nameProductOrdered.splice(
        this.state.idProductOrdered.indexOf(value),
        1
      );
      this.state.priceProductOrdered.splice(
        this.state.idProductOrdered.indexOf(value),
        1
      );
      this.state.numberProductOrdered.splice(
        this.state.idProductOrdered.indexOf(value),
        1
      );
      this.state.idProductOrdered.splice(
        this.state.idProductOrdered.indexOf(value),
        1
      );
      this.state.productChecked.splice(
        this.state.productChecked.indexOf(productChecked),
        1
      );
      this.setState({ numberChecked: this.state.productChecked.length });
      this.setState({
        totalPriceOrder:
          this.state.totalPriceOrder - Number(productChecked.product_price),
      });
    }
  };
  changeNumberOrder = (event) => {
    let target = event.target;
    let value = target.value;
    let id = target.id;
    if (id === "plus") {
      this.setState(
        update(this.state, {
          numberProductOrdered: {
            [value]: {
              $set: Number(this.state.numberProductOrdered[value]) + 1,
            },
          },
          priceProductOrdered: {
            [value]: {
              $set:
                Number(this.state.productChecked[value].product_price) *
                (Number(this.state.numberProductOrdered[value]) + 1),
            },
          },
        })
      );
      let total = this.state.priceProductOrdered.reduce((total, value) => {
        return total + value;
      });
      this.setState({
        totalPriceOrder:
          total + Number(this.state.productChecked[value].product_price),
      });
    } else if (
      id === "min" &&
      Number(this.state.numberProductOrdered[value]) >= 2
    ) {
      this.setState(
        update(this.state, {
          numberProductOrdered: {
            [value]: {
              $set: Number(this.state.numberProductOrdered[value]) - 1,
            },
          },
          priceProductOrdered: {
            [value]: {
              $set:
                Number(this.state.productChecked[value].product_price) *
                (Number(this.state.numberProductOrdered[value]) - 1),
            },
          },
        })
      );
      let total = this.state.priceProductOrdered.reduce((total, value) => {
        return total + value;
      });
      this.setState({
        totalPriceOrder:
          total - Number(this.state.productChecked[value].product_price),
      });
    }
  };

  handleCheckOut = () => {
    this.setState({ isCheckOut: !this.state.isCheckOut });
  };
  componentDidMount() {
    axios
      .get("http://localhost:1000/products")
      .then((res) => {
        console.log(res);
        const products = res.data.listProduct;
        this.setState({ products });
      })
      .catch((err) => console.log(err));
  }
  handlePostOrder = () => {
    postOrder(
      this.state.nameProductOrdered,
      this.state.numberProductOrdered,
      this.state.totalPriceOrder
    );
    window.alert("Thanks for Ordering");
    window.location.reload(false);
  };

  render() {
    return (
      <Mcontext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          handleCheckOut: this.handleCheckOut,
          changeNumberOrder: this.changeNumberOrder,
          totalPriceOrder: this.totalPriceOrder,
          handlePostOrder: this.handlePostOrder,
        }}
      >
        {this.props.children}
      </Mcontext.Provider>
    );
  }
}

// export default MyProvider;
export { MyProvider, Mcontext };
