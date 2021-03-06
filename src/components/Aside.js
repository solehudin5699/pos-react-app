import React from "react";
import OrderItem from "./OrderItem";
import foodrestaurant from "../assets/image/food-and-restaurant.png";
import { Mcontext } from "./MyProvider";

class Aside extends React.Component {
  static contextType = Mcontext;
  render() {
    return (
      <div>
        {this.context.state.productChecked.length ? (
          <OrderItem handleCheckOut={this.props.handleCheckOut}/>
        ) : (
          <aside className='sidebar'>
            <img src={foodrestaurant} alt='' />
            <h3>Your Cart is Empty </h3>
            <p> Please add some items from the menu </p>
          </aside>
        )}
      </div>
    );
  }
}

export default Aside;
