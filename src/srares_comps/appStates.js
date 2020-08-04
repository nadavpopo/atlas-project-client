import React , {useState, useEffect} from 'react';
import Main from './main';
import Header from './header';
import Nav from './nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
function AppStates(props)
{
    return(
        <div>
            <Router>
                <Header/>
                <Nav/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/country/" component={Main}/>
                <Route exact path="/country/:name" component={Main}/>
                <Route exact path="/code/:code" component={Main}/>
            </Router>
        </div> 
    )
}

export default AppStates