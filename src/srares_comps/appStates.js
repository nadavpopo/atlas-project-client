import React , {useState, useEffect} from 'react';
import Main from './main';
import Header from './header';
import Nav from './nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from '@testing-library/react';
function AppStates(props)
{
    let [name , setName] = useState("israel");
    
    return(
        <div >
            <Router>
                <Header/>
                <Nav setName={setName} />
                <Switch>
                    <Main setName={setName} name={name}/>
                </Switch>
            </Router>
        </div> 
    )
}

export default AppStates
