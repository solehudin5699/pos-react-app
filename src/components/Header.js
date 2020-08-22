import React from "react";
import logo from "../assets/icons/list.svg";
import search from "../assets/icons/search.svg";
import { Mcontext } from "./MyProvider";

class Header extends React.Component {
  static contextType = Mcontext;
  render() {
    return (
      <header>
        <div className='hamburger-menu' onClick={this.props.hideShowFunction}>
          <img src={logo} alt='' />
        </div>
        <div className='search'>
          <input
            id='input'
            placeholder='Food Items'
            type='search'
            onChange={this.context.handleInputSearchBar}
            onKeyPress={this.context.handleInputSearchBar}
          />
          <label htmlFor='input' onClick={this.context.handleSearch}>
            <img src={search} alt=''></img>
          </label>
        </div>
        <div className='title-cart'>
          {/* <a href='#order'> */}
            <h6>
              Cart{" "}
              <span className='quantity'>
                {this.context.state.productChecked.length}
              </span>
            </h6>
          {/* </a> */}
        </div>
      </header>
    );
  }
}
export default Header;
