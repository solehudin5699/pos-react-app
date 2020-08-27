import React from "react";
// import { Mcontext } from "./MyProvider";
import{connect} from "react-redux";
import {getProductCreator, selectProductCreator} from "../redux/actions/products";
import {requestProductsCreator} from "../redux/actions/requestProducts";
import axios from "axios";
require("dotenv").config();

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount=()=>{
    let keyword="";
    axios
    .get(`http://localhost:1000/products/search?name=${keyword}&sortBy=product_id&orderBy=ASC&limit=7&page=1`)
    .then((res) => {
      console.log(res);
      const products = res.data.data;
      this.setState({ products });
      this.props.getProduct(products)
    })
    .catch((err) => console.log(err));
}
// componentDidMount=async ()=>{
//   try {
//     await this.props.requestProducts();
//     if(this.props.requestAPIProducts.data){
//       this.props.getProduct(this.props.requestAPIProducts.data.data)
//     }
//   } catch (err){
//     console.log(err)
//   }
  
// }
  // static contextType = Mcontext;
  render() {
    console.log(this.props.products)
    return (
      <div className='main'>
        <div className='row'>
          {/* {this.context.state.products.map((product, index) => { */}
          {this.state.products.map((product, index) => {
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
                        onChange={(e)=>{this.props.selectProduct(e)}}
                        checked={this.props.products.productsOrdered.find(item=>{return item.product_id===product.product_id})?true:false}
                        
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

const mapStateToProps=(state)=>{
  const {products,requestAPIProducts} = state;
  return {products, requestAPIProducts }
};

const mapDispatchToProps=(dispacth)=>{
  return{
    getProduct:(products)=>{
      dispacth(getProductCreator(products))
    },
    selectProduct:(event)=>{
      dispacth(selectProductCreator(event))
    },
    requestProducts:()=>{
      dispacth(requestProductsCreator(""))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
