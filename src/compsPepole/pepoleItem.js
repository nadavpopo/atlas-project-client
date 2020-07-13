import React,{Component} from "react";
import{Link, NavLink} from "react-router-dom";
import "./pepole.css"

class PepoleItem extends Component
{
  render()
  {
    let item = this.props.item;

    return(
      <div className="col-lg-12 border solid my-2">
            <Link className ="text-decoration-none" to={"/single/"+item.location.postcode}>
              <img src={item.picture.large} className="float-left rounded-circle mr-5" />
              <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
              <h4>{item.dob.age}</h4>
              <h4>{item.location.timezone.description}</h4>
            </Link>
      </div>
    )
  }
}

export default PepoleItem;