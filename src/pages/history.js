import React from "react";
import { MyProvider } from "../components/MyProvider";
import HeaderHistory from "../components/HeaderHistory";
import Navbar from "../components/Navbar";
import MainHistory from "../components/MainHistory";
import AddData from '../components/modals/AddData'

class History extends React.Component {
  state = {
    isShow: true,
    isShowAddModal: false,
  };

  handleHideShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  
  handleShowAddModal = () => {
    this.setState({ isShowAddModal: !this.state.isShowAddModal });
  };
  render() {
    return (
      <>
        <MyProvider>
          <div className='app'>
            <HeaderHistory hideShowFunction={this.handleHideShow} />
            <div className='wrapper-history'>
              {this.state.isShow ? (
                <Navbar handleShowAddModal={this.handleShowAddModal} />
              ) : null}
              <MainHistory />
            </div>
            {this.state.isShowAddModal ? (
              <AddData
              handleShowAddModal={this.handleShowAddModal}
              />
            ) : null}
          </div>
        </MyProvider>
        {/* </div> */}
      </>
    );
  }
}
export default History;
