import React from "react";
import logo from "../assets/icons/list.svg";


class HeaderHistory extends React.Component {
  render() {
    return (
      <div className="header-history">
        <div className='hamburger-menu' onClick={this.props.hideShowFunction}>
          <img src={logo} alt='' />
        </div>
        <div className="title">
          <div><p>History</p></div>
        </div>
        
      </div>
    );
  }
}
export default HeaderHistory;
