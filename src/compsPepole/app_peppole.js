import React,{Component} from "react";
import Header from "./header";
import Nav from "./nav";
import Main from "./main";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PepoleSingle from "./pepoleSingle";


class AppPepole extends Component
{
    render()
    {
        return(
            <Router>
                <div>
                    <Header/>
                    <Nav/>
                    <Switch>      
                        <Route exact path="/" component ={Main}/>
                        <Route exact path="/single/:id" component={PepoleSingle} />       
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppPepole;