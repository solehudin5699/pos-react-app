import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/home';
// import History from './pages/history';

function AppRouter(){
    return(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/history" component={History}/> */}
        </div>
    </Router>
    )
}
export default AppRouter;