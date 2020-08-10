import React from "react";
import axios from "axios";
// import checkedImage from '../assets/image/ceklis.png';
import { Mcontext } from "./MyProvider";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberChecked: 0,
      products: [],
      productChecked: [],
      selected: true,
    };
    // this.handleChange=this.handleChange.bind(this);
  }
  // handleChange (event) {
  //   const target=event.target;
  //   const value=target.checked;
  //   const name=target.name;
  //   if(value){
  //     this.setState({numberChecked:this.numberChecked+1});
  //     this.state.productChecked.push(name);
  //   }
  //   else{
  //     this.setState({numberChecked:this.numberChecked-1});
  //     this.state.productChecked.splice(this.state.productChecked.indexOf(name),1);
  //   }
  // }

  handleSelected = () => {
    this.setState({ selected: !this.state.selected });
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
  static contextType = Mcontext;
  render() {
    // console.log(this.context.state.idProductOrdered);
    return (
      // <div>

      //   <Mcontext.Consumer>
      //     {
      //       (context)=>(
      //         <div className="main container">
      //         <div className="row" >

      //         {this.state.products.map((product,index)=>
      //         {
      //           return (
      //             <div key={index.toString()} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
      //                 <div className="card bg-transparent" >
      //                   <img src={product.product_image} className="card-img-top" alt=""/>

      //                   <div className="card-img-overlay" >
      //                     <label className="container1">
      //                       <input type="checkbox" value={product.product_id} name={product.product_name} onChange={context.handleChanged}/>
      //                       <span className="checkmark"></span>
      //                     </label>
      //                   </div>

      //                   <div className="card-body">
      //                     <p className="card-title">{product.product_name}</p>
      //                     <p className="card-text font-weight-bold">Rp {product.product_price}</p>
      //                   </div>
      //                 </div>
      //             </div>
      //           )
      //         }
      //       )
      //     }
      //     </div>
      //     </div>
      //       )
      //     }
      //   </Mcontext.Consumer>
      // </div>

      <div className="main container">
        <div className="row">
          {this.state.products.map((product, index) => {
            return (
              <div
                key={index.toString()}
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
              >
                <div className="card bg-transparent">
                  <img
                    src={product.product_image}
                    className="card-img-top"
                    alt=""
                  />

                  <div className="card-img-overlay">
                    <label className="container1">
                      <input
                        type="checkbox"
                        value={product.product_id}
                        name={product.product_name}
                        onChange={this.context.handleChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="card-body">
                    <p className="card-title">{product.product_name}</p>
                    <p className="card-text font-weight-bold">
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
