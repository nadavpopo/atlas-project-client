import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Nav(props)
{
    const val = useRef("");

    const search = () =>
    {
        if(val.current.value != "")
        {
            props.setName(val.current.value);
        }
        else
        {
            alert("You most to enter value");
        }
    }
    return(
        <nav className="container d-flex justify-content-around">  
            <div className="row">
                <Link onClick={()=>props.setName("israel")} className="btn btn-light" to="/Israel">Isreal</Link>
                <Link onClick={()=>props.setName("usa")} className="btn btn-light" to="/Usa">U.S.A</Link>
                <Link onClick={()=>props.setName("uk")} className="btn btn-light" to="/Uk">U.K</Link>
                <Link onClick={()=>props.setName("Russian Federation")} className="btn btn-light" to="/Russian%22Federation">Russian</Link>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <input ref={val} className="col-lg-8 form-control" type="text" placeholder="Search state..."/>
                    <Link onClick={search} className="btn btn-primary ml-3"  to={"/"+val.current.value}>Found</Link>
                </div>
            </div>
        </nav> 
    )
}

export default Nav
