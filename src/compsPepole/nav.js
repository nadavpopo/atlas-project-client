import React,{Component} from "react";

class Nav extends Component{
  render(){
    return(
      <nav className="center">
        <input placeholder="Search pepole..." type="text" className="form-control col-lg-6"/>
        <button className="btn btn-info ml-4">Found</button>
      </nav>   
    )
  }
}

export default Nav;