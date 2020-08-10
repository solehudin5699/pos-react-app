import React from 'react';
import logo from "../assets/icons/list.svg";
import search from "../assets/icons/search.svg";
import {Mcontext} from './MyProvider';

class Header extends React.Component {
    static contextType = Mcontext;
    render() {
        return (
            <header>
                <div className="hamburger-menu" onClick={this.props.hideShowFunction}>
                    <img src={logo} alt="" />
                </div>
                <div className="title-foods">
                    <h6>Food Items</h6>
                    <img src={search} alt=""></img>
                </div>
                <div className="title-cart">
                <h6>Cart <span className="quantity">{this.context.state.numberChecked}</span></h6>
                    {/* <Mcontext.Provider>{(context)=>(
                        <h6>Cart <span className="quantity">{context.state.numberChecked}</span></h6>
                    )}
                    </Mcontext.Provider> */}
                </div>
            </header>
        )
    }
}
export default Header;
