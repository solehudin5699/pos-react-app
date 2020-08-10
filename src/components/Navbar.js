import React from "react";
//IMPORT IMAGE
import fork from "../assets/image/fork.png";
import clipboard from "../assets/image/clipboard.png";
import add from "../assets/image/add.png";

class Navbar extends React.Component {
  render() {
    return (
    <div className="navbar">
      <img src={fork} alt="" />
      <img src={clipboard} alt="" />
      <img src={add} alt="" onClick={this.props.handleShowAddModal} />
    </div>
    );
  }
}

export default Navbar;
