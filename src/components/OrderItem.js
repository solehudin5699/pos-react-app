import React from "react";
import { Mcontext } from "./MyProvider";

class Aside extends React.Component {
  static contextType = Mcontext;
  render() {
    console.log(this.context.state.numberProductOrdered);
    return (
      <div className="sidebar">
        <div className="aside-items">
          <h5 className="detail-order">Detail Order</h5>
          {this.context.state.productChecked.map((item, index) => {
            return (
              <div key={index} id="item">
                <div id="col1">
                  <img src={item.product_image} alt="" />
                </div>
                <div id="col2">
                  <h6>{item.product_name}</h6>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <button
                            className="btn-num-order"
                            value={index}
                            id="min"
                            onClick={this.context.changeNumberOrder}
                          >
                            -
                          </button>
                        </td>
                        <td>
                          {this.context.state.numberProductOrdered[index]}
                        </td>
                        <td>
                          <button
                            className="btn-num-order"
                            value={index}
                            id="plus"
                            onClick={this.context.changeNumberOrder}
                          >
                            +
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="col3">
                  Rp. {this.context.state.priceProductOrdered[index]}
                </div>
              </div>
            );
          })}
        </div>
        <div className="aside-bottom">
          <div id="total-item">
            <div id="total">
              <h6>Total</h6>
              <p>*Belum termasuk PPN</p>
            </div>
            <div id="total-value">
              <h6>Rp. {this.context.state.totalPriceOrder}*</h6>
            </div>
          </div>
          <button id="checkout" onClick={this.props.handleCheckOut}>
            Checkout
          </button>
          <button id="cancel">Cancel</button>
        </div>
      </div>
    );
  }
}

export default Aside;
