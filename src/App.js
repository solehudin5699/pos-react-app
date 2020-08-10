import React from "react";
import { MyProvider} from "./components/MyProvider";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Aside from "./components/Aside";
import CheckOut from "./components/modals/CheckOut";
import AddData from "./components/modals/AddData";
import "./App.css";

class App extends React.Component {
  state = {
    isShow: false,
    isCheckOut: false,
    isShowAddModal:false,
  };

  handleHideShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  handleShowAddModal = () => {
    this.setState({ isShowAddModal: !this.state.isShowAddModal });
  };
  handleCheckOut = () => {
    this.setState({ isCheckOut: !this.state.isCheckOut });
  };
  handleWindowRefresh = () => {
    window.alert("Thanks for Ordering");
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        {/* {this.state.isPrint?this.context.setState({productChecked:null}):null} */}
        <MyProvider>
          <div className="app">
            <Header hideShowFunction={this.handleHideShow} />
            <div className="wrapper">
              <div className="nav-main">
                {this.state.isShow ? <Navbar handleShowAddModal={this.handleShowAddModal}/> : null}
                <Main />
              </div>
              <Aside handleCheckOut={this.handleCheckOut} />
            </div>
            {this.state.isCheckOut ? (
              <CheckOut
                handleWindowRefresh={this.handleWindowRefresh}
                handleCheckOut={this.handleCheckOut}
              />
            ) : null}
            
            {this.state.isShowAddModal ? (
              <AddData
              handleWindowRefresh={this.handleWindowRefresh}
              handleShowAddModal={this.handleShowAddModal}
              />
            ) : null}

          </div>
        </MyProvider>
      </div>
    );
  }
}
export default App;
