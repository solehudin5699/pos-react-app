import React from "react";
import { Mcontext } from "./MyProvider";
require("dotenv").config();

class Main extends React.Component {
  static contextType = Mcontext;
  render() {
    return (
      <div className='main'>
        <div className='row'>
          {this.context.state.products.map((product, index) => {
            return (
              <div
                key={index.toString()}
                className='col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                <div className='card bg-transparent'>
                  <img
                    src={product.product_image}
                    className='card-img-top'
                    alt=''
                  />

                  <div className='card-img-overlay'>
                    <label className='container1' title="Click for order">
                      <input
                        type='checkbox'
                        value={product.product_id}
                        name={product.product_name}
                        checked={this.context.state.productChecked.find(item=>{return item.product_id===product.product_id})?true:false}
                        onChange={this.context.handleChange}
                      />
                      <span className='checkmark'></span>
                    </label>
                  </div>

                  <div className='card-body'>
                    <p className='card-title'>{product.product_name}</p>
                    <p className='card-text'>
                      Rp {product.product_price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Main;
