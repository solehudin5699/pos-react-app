import React from "react";
import { Mcontext } from "../MyProvider";

class CheckOut extends React.Component {
  static contextType = Mcontext;
  render() {
    return (
      <div className="modal">
        <div className="content-wrapper">
          <div className="modal-content">
            <button
              onClick={this.props.handleCheckOut}
              type="button"
              className="close text-right"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row">
              <div className="col">Checkout</div>
              <div className="col">Receipt no:#010410919</div>
            </div>
            <div className="row row-cashier">
              <div className="col col-cashier">Cashier : Pevita Pearce</div>
              <div className="col"></div>
            </div>
            {this.context.state.productChecked.map((item)=>{
              return(
                <div className="row">
                  <div className="col">{item.product_name} {item.numOrder}x</div>
                  <div className="col">Rp.{item.product_price} </div>
                </div>
              )
            })}
            <div className="row">
              <div className="col">Ppn 10%</div>
              <div className="col">Rp.{0.1*this.context.state.totalPriceOrder} </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">Total: Rp.{0.1*Number(this.context.state.totalPriceOrder)+Number(this.context.state.totalPriceOrder)} </div>
            </div>
            <div className="row">
              <div className="col">Payment: Cash</div>
              <div className="col"></div>
            </div>
            <button
              id="print"
              className="btn button-print"
              onClick={this.context.handlePostOrder}
            >
              Print
            </button>
            <h6 className="row-or">Or</h6>
            <button id="send-email" className="button-send-email">
              Send Email
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
