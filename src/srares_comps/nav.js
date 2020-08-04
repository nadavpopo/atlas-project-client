import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav(props)
{
    const val = useRef("");
    let history = useHistory();

    const search = () =>
    {
        if(val.current.value != "")
        {
            history.push("/country/"+val.current.value);
            val.current.value = ""; 
        }
        else
        {
            alert("You most to enter value");
        }
    }
    return(
        <nav className="container d-flex justify-content-around">  
            <div className="row">
                <Link to={"/country/israel"} className="btn btn-light">Isreal</Link>
                <Link to={"/country/usa"} className="btn btn-light">U.S.A</Link>
                <Link to={"/country/uk"} className="btn btn-light">U.K</Link>
                <Link to={"/country/China"} className="btn btn-light" >China</Link>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <input ref={val} className="col-lg-8 form-control" type="text" placeholder="Search state..."/>
                    <Link onClick={search} className="btn btn-primary ml-3">Found</Link>
                </div>
            </div>
        </nav> 
    )
}

export default Nav
