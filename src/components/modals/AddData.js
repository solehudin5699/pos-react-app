import React from "react";
import { Mcontext } from "../MyProvider";

class AddData extends React.Component {
  static contextType = Mcontext;
  render() {
    return (
      <div className="modal-add-data">
      <div className="content-wrapper">
          <div className="modal-content">
              <form>
              <div className="row">
                  <div className="col-12">
                      <h4 >Add Items</h4>
                  </div>
              </div>
              <div className="row">
                  <div className="col-4">Name</div>
                  <div className="col-8"><input className="input-name" name="name" type="text"/></div>
              </div>
              <div className="row">
                  <div className="col-4">Image</div>
                  <div className="col-8"><input className="input-image" type="text" name="image"/></div>
              </div>
              <div className="row">
                  <div className="col-4">Price</div>
                  <div className="col-8"><input nameClass="input-price" type="text" name="price"/></div>
              </div>

              <div className="row">
                  <div className="col-4">Category</div>
                  <div className="col-8">
                      <select name="category" placeholder="Category" >
                          <optgroup label="Category">
                              <option value="1" selected>Makanan Khas Jawa Barat</option>
                              <option value="2">Makanan Khas Banten</option>
                          </optgroup>
                      </select>
                  </div>
              </div>
              <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6 d-flex justify-content-between align-items-center align-items-center">
                      <button className="btn-cancel" onClick={this.props.handleShowAddModal}>Cancel</button>
                      <button className="btn-add" onClick={this.props.handleWindowRefresh}>Add</button>
                  </div>
              </div>
              </form>
          </div>
      </div>
  </div>
    );
  }
}

export default AddData;
