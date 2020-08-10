import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Mcontext} from './components/MyProvider';
import './App.css';


class Wrapper extends React.Component {
    // static contextType = Mcontext;
render() {
    return (
        <div className="wraper">
            <div className="nav-main">
                <Mcontext.Consumer>{
                    (context)=>(
                        context.state.isShow?<Navbar/>:null
                    )
                    }
                </Mcontext.Consumer>
                <Main/>
            </div>
        </div>
        )
    }
}
export default Wrapper;